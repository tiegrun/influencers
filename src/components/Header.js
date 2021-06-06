const Header = () => {
  return (
    <div className="header">
      <div id="logo">
        <h1>The Influencer</h1>
        <h2>The target is Armenians all over the world</h2>
      </div>
      <nav className="navBar">
        <ul>
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#home">Our Partners</a></li>
          <li><a href="#home">Creators</a></li>
          {/* <li><a href="#home">Bloggers</a></li>
          <li><a href="#home">Vloggers</a></li> */}
          <li><a href="#home">About us</a> </li>
          <li><a href="#home">Help</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header 