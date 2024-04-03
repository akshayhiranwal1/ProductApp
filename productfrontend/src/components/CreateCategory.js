import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCategory} from "../Reducers/CategoryReducer";
import {useNavigate} from "react-router-dom";
import MenuComp from "./MenuComp";

function CreateCategory() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (event)=> {
        event.preventDefault();
        dispatch(addCategory({id, name}));
        navigate("/category");
    }

    return (
        <div className="container">
            <MenuComp/>
            <h2>Create Category</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Id:</label>
                    <input type="number" name="id" className="form-control"
                           placeholder="enter id" onBlur={e => setId(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control"
                           placeholder="enter name" onBlur={e => setName(e.target.value)}/>
                </div>
                <button className="btn btn-info">Submit</button>
            </form>
        </div>
    )
}

export default CreateCategory;