import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { Link } from "react-router-dom";

const Cart = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);

  return (
    <div
      className="card p-3 mb-4"
      style={{
        width: "250px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="d-flex justify-content-center">
        <img
          className="object-fit-contain rounded"
          height={120}
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="card-body text-center">
        <h4 className="text-truncate text-primary">{product.title}</h4>
        <p className="text-muted mb-2">Category: {product.category}</p>
        <p className="text-danger font-weight-bold mb-3">${product.price}</p>
        <button
          onClick={() => addToBasket(product)}
          className="btn btn-success mb-3"
          style={{ width: "100%" }}
        >
          Sepete Ekle
        </button>
        <Link
          to={`/productDetail/${product.id}`}
          className="btn btn-warning w-100"
        >
          Ürün Detayı
        </Link>
      </div>
    </div>
  );
};

export default Cart;
