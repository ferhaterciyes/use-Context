import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../context/productContext";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const { setSelectedCategory } = useContext(ProductContext);
  const { basket } = useContext(BasketContext);


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  // sepetteki toplam ürün sayısı

 const totalAmound =  basket.reduce((total , i )=>total + i.amound,0)


  return (
    <div>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Context-Store</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Context-Store
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/">
                    Anasayfa
                  </NavLink>
                  <NavLink className="nav-link" to="/checkOut">
                    Sepet
                  </NavLink>
                  <div style={{ width: "50px" }}>
                    <span className="badge bg-danger p-1 my-2">{totalAmound}</span>
                  </div>
                  <NavDropdown
                    title="Categoriler"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    
                  >
                    <NavDropdown.Item
                    className="text-truncate text-warning"
                    onClick={() => setSelectedCategory(null)}

                    >
                      <a href="" 
                      className="dropdown-item"
                      >
                        Hepsi
                      </a>
                    </NavDropdown.Item>
                    {categories.map((category) => (
                      <NavDropdown.Item
                        onClick={() => setSelectedCategory(category)}
                        className="text-truncate text-warning"
                        key={category.id}
                      >
                        <a className="dropdown-item" href="">
                          {" "}
                          {category}
                        </a>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
