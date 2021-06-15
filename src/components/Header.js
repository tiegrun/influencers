import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div id="logo">
        <h1>The Influencer</h1>
        <h2>The target is Armenians all over the world</h2>
      </div>
      <nav className="navBar">
        <ul>
          

          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/partners">Our Partners</NavLink>
          <NavLink to="/services">Our Services</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
          <NavLink to="/help">Help</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header 