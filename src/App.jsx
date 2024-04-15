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
<<<<<<< HEAD
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/vehicles" element={<VehiclesPage/>} />
=======
>>>>>>> 55b7062af12bca12a5ab7c90f7965f9cee821f83


    </Routes>
    </div>
  )
}

export default App