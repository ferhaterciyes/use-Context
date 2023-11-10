import Loader from "../components/loader";
import Cart from "../components/card";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";

const MainPage = () => {
/* context yapısına abone olma
   context yapısında value olarak belirlenen verilere erişim sağlarız
*/
const {products } = useContext( ProductContext)

  return (
    <div className="d-flex flex-wrap gap-3 gap-md-4 justify-content-center justify-content-md-between mt-5 container">
        {/* veriler gelmedi ise yükleniyor göster */}
        {!products && <Loader />}
      {products?.map((product) => (
      <Cart key={product.id} product = {product} />
      ))}
    </div>
  );
};

export default MainPage;
