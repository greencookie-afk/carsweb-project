import { Route, Routes } from "react-router-dom"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import HomePage from "./pages/HomePage/HomePage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />


    </Routes>
  )
}

export default App