import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {deleteCategory} from "../Reducers/CategoryReducer";
import MenuComp from "./MenuComp";

function CategoryComp() {
    const categories = useSelector((state)=> state.categories);
    const dispatcher = useDispatch();
    const navigation = useNavigate();
    const handleDelete = (id)=>{
        dispatcher(deleteCategory({id:id}));
        navigation("/category");
    }

    return (
        <div className="container">
            <h2>Crud App Category</h2>
            <MenuComp />
            <Link to="/createcategory" className="btn btn-success my-3">Create +</Link>
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    categories.map((category, index) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>
                                <Link to={"/updatecategory/"+category.id} className="btn btn-sm btn-primary">Edit</Link>
                                <button onClick={()=> handleDelete(category.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default CategoryComp;