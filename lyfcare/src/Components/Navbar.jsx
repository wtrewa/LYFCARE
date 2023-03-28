import {Link} from "react-router-dom"
import Dashboard from './../Pages/Dashboard';

function Navbar() {
    
    return (
      <div>
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/Login"}>Login</Link>
        <Link to={"/ragister"}>Ragister</Link>
      </div>
    );
}

export default Navbar


