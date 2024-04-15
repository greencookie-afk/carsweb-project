import { Route, Routes } from "react-router-dom"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import HomePage from "./pages/HomePage/HomePage"
import VehiclesPage from "./pages/VehiclesPage/VehiclesPage"
import Navbar from "./Components/Navbar/Navbar"


const App = () => {
  return (
    <div className="">
      <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/vehicles" element={<VehiclesPage/>} />


    </Routes>
    </div>
  )
}

export default App