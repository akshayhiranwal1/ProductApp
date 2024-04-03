import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {updateCategory} from "../Reducers/CategoryReducer"

function UpdateCategory(){
    const {id} = useParams();

    const categories = useSelector((state) => state.categories);
    const existingCategory = categories.filter(i=>i.id == id);
    const {name} = existingCategory[0];
    const[cname, setName] = useState(name);

    const dispatcher = useDispatch();
    const navigation = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatcher(updateCategory({
            id:id,
            name:cname
        }));
        navigation("/category");
    }

    return (
        <div className="container">
            <h2>Update Category</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" value={cname}
                           placeholder="enter name" onChange={e => setName(e.target.value)}/>
                </div>
                <button className="btn btn-info" title="Submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateCategory;