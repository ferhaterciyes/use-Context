import { useContext } from "react";
import { BasketContext } from "./../context/basketContext";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { basket, addToBasket, removeFormBasket } = useContext(BasketContext);

  const totalPrice = basket.reduce((total, i) => total + i.amound * i.price, 0);
  const totalAmound = basket.reduce((total, i) => total + i.amound, 0);

  return (
    <div className="container mt-5">
      {basket.length === 0 ? (
        <div className="text-center my-5">
          <p className="fs-4 text-info">Sepetiniz boş! Hemen alışverişe başlayın.</p>
          <Link className="btn btn-warning fs-5" to="/">
            Anasayfa
          </Link>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {basket.map((product) => (
            <div
              className="d-flex justify-content-between align-items-center gap-3 p-3 border rounded bg-light text-dark"
              key={product.id}
            >
              <div style={{ minWidth: "100px", height: "100px", width: "100px" }}>
                <img
                  className="rounded shadow object-fit-cover w-100 h-100"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="d-flex flex-column">
                <h4 className="text-truncate mb-1 fs-5">{product.title}</h4>
                <p className="text-sm text-muted mb-1 fs-6">
                  Kategori: {product.category}
                </p>
                <p className="text-sm text-light mb-0 fs-6">
                  Miktar: {product.amound}
                </p>
              </div>
              <h3 className="text-success fs-5">${product.price.toFixed(2)}</h3>
              <div className="d-flex gap-3">
                <button
                  onClick={() => removeFormBasket(product.id)}
                  className="btn btn-danger fs-4"
                >
                  -
                </button>
                <button
                  onClick={() => addToBasket(product)}
                  className="btn btn-success fs-4"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {basket.length > 0 && (
        <div className="border m-5 p-3 fs-5 rounded bg-light text-dark">
          <p className="mb-3 text-info">
            Sepetteki ürün: <span className="text-warning">{totalAmound}</span>
          </p>
          <p>
            Toplam Fiyat: <span className="text-success">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
