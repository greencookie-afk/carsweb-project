import './Navbar.css'
 const Navbar = ()=> {
    return   <nav className="navbar">
    <div className="logo">Porsche</div>
    <div className="nav-links">
      <a href="/" className="nav-item">Home</a>
      <a href="#" className="nav-item">Login</a>
      <a href="/vehicles" className="nav-item">Vehicles</a>
      <a href='/contact' className='nav-contact'>Contact</a>
    </div>
  </nav>
 }

 export default Navbar