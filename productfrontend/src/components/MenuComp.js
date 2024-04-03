import {Link} from "react-router-dom";

function MenuComp() {
    return (
        <div className="container">
            <Link to="/" className="btn btn-sm btn-primary">Products</Link>
            <br/>
            <Link to="/category" className="btn btn-sm btn-primary">Category</Link>
        </div>
    )
}
export default MenuComp;