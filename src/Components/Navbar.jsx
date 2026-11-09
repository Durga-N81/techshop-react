import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Tech-Shop</h1>

      <div className="navbar-icons">
        <FaSearch />
        <FaShoppingCart />
        <FaUser />
      </div>
    </nav>
  );
}

export default Navbar;