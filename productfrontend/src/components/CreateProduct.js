import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {addProduct} from "../Reducers/ProductReducer"

function CreateProduct() {
    const categories = useSelector((store)=>store.categories);
    const [id, setId]= useState("");
    const [description, setDescription]= useState("");
    const [canExpired, setCanExpired]= useState("");
    const [expiryDate, setExpiryDate]= useState("");
    const [fkCategoryId, setFkCategoryId]= useState("");
    const [price, setPrice]= useState("");
    const [isSpecial, setIsSpecial]= useState("");

    const navigation = useNavigate();
    const dispatcher = useDispatch();

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatcher(addProduct({
            id,description,canExpired,expiryDate,fkCategoryId,price,isSpecial
        }));
        navigation("/");
    }

    return (
        <div className="container">
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">Id:</label>
                    <input type="number" name="id" className="form-control"
                           placeholder="enter id" onBlur={e => setId(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="name">Description:</label>
                    <input type="text" name="description" className="form-control"
                           placeholder="enter description" onBlur={e => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Can Expired:</label>
                    <input type="checkbox" name="canExpired"
                           onChange={e => setCanExpired(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="name">Expiry Date:</label>
                    <input type="text" name="expiryDate" className="form-control"
                           placeholder="enter expiryDate" onBlur={e => setExpiryDate(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Category:</label>
                    <select className="form-control" onChange={e => setFkCategoryId(e.target.value)}>
                        <option value="0">select</option>
                        {
                            categories.map((cat, index) => (
                                <option value={cat.id}>{cat.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label htmlFor="name">Price:</label>
                    <input type="text" name="price" className="form-control"
                           placeholder="enter price" onBlur={e => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Is Special:</label>
                    <input type="checkbox" name="isSpecial"
                           onChange={e => setIsSpecial(e.target.value)}/>
                </div>
                <button className="btn btn-info">Submit</button>
            </form>
        </div>
    )
}

export default CreateProduct;