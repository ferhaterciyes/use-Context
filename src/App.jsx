import { BrowserRouter , Routes , Route } from "react-router-dom"
import MainPage from "./pages/mainPage"
import CheckOut from "./pages/checkOut"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./components/header"
import ProductDetail from "./pages/productDetail";


function App() {

  return (
    <>
  <BrowserRouter >
  <Header />
  <Routes>
    <Route path="/"  element={<MainPage />} />
    <Route path="/checkOut"  element={<CheckOut />} />
    <Route path="/productDetail/:id"  element={<ProductDetail />} />

  </Routes>

  
  </BrowserRouter>

    </>
  )
}

export default App
