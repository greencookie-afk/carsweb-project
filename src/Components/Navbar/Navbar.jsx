import { useNavigate } from 'react-router-dom'
import './Navbar.css'
 const Navbar = ()=> {
  const navigate = useNavigate();
    return   <nav className="navbar">
    <div className="logo">Porsche</div>
    <div className="nav-links">
      <div onClick={()=>{navigate('/home')}} className="nav-item">Home</div>
      <div onClick={()=>{navigate('/login')}}  className="nav-item">Login</div>
      <div onClick={()=>{navigate('/Signup')}}  className="nav-item">Signup</div>
      <div  onClick={()=>{navigate('/contact')}} className='nav-contact'>Contact</div>
    </div>
  </nav>
 }

 export default Navbar