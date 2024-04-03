import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import {searchByCat, deleteProduct} from "../Reducers/ProductReducer"
import MenuComp from "./MenuComp";

function ProductComp() {
    const products = useSelector((store) => store.products);
    const categories = useSelector((store)=>store.categories);

    const [fkcategoryid, setCategory] = useState("");

    const dispatcher = useDispatch();

    const deletePro = (id)=>{
        dispatcher(deleteProduct({id:id}));
    }

    const search = ()=> {
        dispatcher(searchByCat({id: fkcategoryid}));
    }

    return (
        <div className="container">
            <MenuComp />
            <h2>Crud App Product</h2>
            <div className="container row">
                <div className="form-control">
                            <select onChange={e => setCategory(e.target.value)}>
                                <option value="0">select</option>
                                {
                                    categories.map((cat, index) => (
                                        <option value={cat.id}>{cat.name}</option>
                                    ))
                                }
                            </select>
                </div>
                <div className="form-control">
                    <button onClick={()=> search()} className="btn btn-info">Search</button>
                </div>
            </div>
            <Link to="/createproduct" className="btn btn-success my-3">Create</Link>
            <div className="container">
                <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Can Expired</th>
                    <th>Expiry Date</th>
                    <th>FkCategoryId</th>
                    <th>Price</th>
                    <th>Is Special</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.description}</td>
                            <td>
                                {
                                    product.canExpired?"True":"False"
                                }
                            </td>
                            <td>{product.expiryDate}</td>
                            <td>
                                {
                                    categories.filter(i=>i.id == product.fkCategoryId)[0].name
                                }
                            </td>

                            <td>{product.price}</td>
                            <td>
                                {
                                    product.isSpecial?"True":"False"
                                }
                            </td>
                            <td>
                                <Link to={"/updateproduct/" + product.id} className="btn btn-sm btn-primary">Edit</Link>
                                <button onClick={() => deletePro(product.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default ProductComp;