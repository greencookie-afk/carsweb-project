import { Route, Routes } from "react-router-dom"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import HomePage from "./pages/HomePage/HomePage"
import VehiclesPage from "./pages/VehiclesPage/VehiclesPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App