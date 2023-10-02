import{BrowserRoute,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Singin from "./pages/Singin"
import Singup from "./pages/Singup"
import About from "./pages/About"
import Profile from "./pages/profile"




export default function App() {
  return (
    <BrowserRoute>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Singin" element={<Singin/>}/>
      <Route path="/Singup" element={<Singup/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      
        
    </Routes>
    
    </BrowserRoute>
  )
}
