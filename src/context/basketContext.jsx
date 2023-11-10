import { createContext, useState } from "react";

 export const BasketContext = createContext();


export function BasketProvider({children}){

const [basket, setBasket]= useState([])
  /* ürünün sepete ekler */
const addToBasket = (product)=>{

  
  /* sepette bu üründen daha önce eklenmişmi bakcaz */
  const found = basket.find((i)=> i.id === product.id )
    if(found){
  const updated = {...found , amound:found.amound + 1 }
//* sepet dizisinden eski elemanı çıkarıp yenisini ekle
const updatedBasket = basket.map((item)=> 
updated.id === item.id ? updated : item)
    setBasket(updatedBasket)
    
 }else{
      setBasket([...basket,{...product , amound:1}]);
//* sepete ekle miktarını 1 e wşitlr
    } 
}

const removeFormBasket = (delete_id)=>{
/* sepette ürünü bull */
const found = basket.find((item)=> item.id === delete_id )

if(found.amound >1){
  const updated = {...found , amound:found.amound - 1 }

const newBasket = basket.map((item)=> 
updated.id === item.id ? updated : item)
    setBasket(newBasket)
    
}else{
 const filtred = basket.filter((i)=> i.id !==delete_id)
 setBasket(filtred)
}

}

 return (
 <BasketContext.Provider value={{basket , addToBasket , removeFormBasket}}>
    {children}
</BasketContext.Provider>
)}

