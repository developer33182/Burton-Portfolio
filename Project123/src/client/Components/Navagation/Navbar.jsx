
import {Link} from 'react-router-dom';
import "./Navbar.css"; // Assuming you have a CSS file for styling
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className='link1'><Link to="/">Home</Link></li>
        <li className='link2'><Link to="/portfolio">Portfolio</Link></li>
        <li className='link2'><Link to="/about">About</Link></li>
        <li className='link3'><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;