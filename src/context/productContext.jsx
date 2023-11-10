import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [selectedcategory , setSelectedCategory] = useState(null)

  useEffect(() => {
        axios
      .get(`https://fakestoreapi.com/products${selectedcategory ? "/category/" + selectedcategory : " "}`)
      .then((res) => setProducts(res.data));
  }, [selectedcategory]);


  return (
    <ProductContext.Provider value={{ products , setSelectedCategory}}>
      {children}
    </ProductContext.Provider>
  );
}
