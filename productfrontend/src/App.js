import logo from './logo.svg';
import './App.css';
import CategoryComp from "./components/CategoryComp";
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductComp from "./components/ProductComp";
import CreateCategory from "./components/CreateCategory";
import UpdateCategory from "./components/UpdateCategory";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductComp />}></Route>
                <Route path="/category" element={<CategoryComp />}></Route>
                <Route path="/createcategory" element={<CreateCategory />}></Route>
                <Route path="/updatecategory/:id" element={<UpdateCategory />}></Route>
                <Route path="/createproduct" element={<CreateProduct />}></Route>
                <Route path="/updateproduct/:id" element={<UpdateProduct />}></Route>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
