import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage"
import VehiclesPage from "./pages/VehiclesPage/VehiclesPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App