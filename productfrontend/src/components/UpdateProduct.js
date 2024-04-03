import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {updateProduct} from "../Reducers/ProductReducer"

function UpdateProduct() {
    const {id} = useParams();
    const categories = useSelector((state) => state.categories);
    const products = useSelector((state)=> state.products);

    const existing = products.filter(i=> i.id == id);
    console.log("Product", existing);

    const {description, canExpired,expiryDate,fkCategoryId, price, isSpecial} = existing[0];
    const [pdesc, setDescription] = useState(description);
    const [pCanExpired, setCanExpired] = useState(canExpired);
    const [pExpiryDate, setExpiryDate] = useState(expiryDate);
    const [pFkCategoryId, setFkCategoryId] = useState(fkCategoryId);
    const [pPrice, setPrice] = useState(price);
    const [pIsSpecial, setIsSpecial] = useState(isSpecial);

    let dispatcher= useDispatch();
    let navigation = useNavigate();

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log("Can Expired" + pCanExpired);
        console.log("Is Special" + pIsSpecial);
        dispatcher(updateProduct({
            id:id,
            description:pdesc,
            canExpired:pCanExpired,
            expiryDate:pExpiryDate,
            fkCategoryId:pFkCategoryId,
            price:pPrice,
            isSpecial:pIsSpecial
        }));
        navigation("/");
    }

    return (
        <div className="container">
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Description:</label>
                    <input type="text" name="description" className="form-control" value={pdesc}
                           placeholder="enter description" onChange={e => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Can Expired:</label>
                    <input type="checkbox" name="canExpired" checked={pCanExpired}
                           onChange={e => setCanExpired(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Expiry Date:</label>
                    <input type="text" name="expiryDate" className="form-control" value={pExpiryDate}
                           placeholder="enter expiryDate" onChange={e => setExpiryDate(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Category:</label>
                    <select className="form-control" value={pFkCategoryId} onChange={e => setFkCategoryId(e.target.value)}>
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
                    <input type="text" name="price" className="form-control" value={pPrice}
                           placeholder="enter price" onChange={e => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="name">Is Special:</label>
                    <input type="checkbox" name="isSpecial" checked={pIsSpecial}
                               onChange={e => setIsSpecial(e.target.value)}/>
                </div>
                <button className="btn btn-info">Submit</button>
            </form>
        </div>
    )
}

export default UpdateProduct;