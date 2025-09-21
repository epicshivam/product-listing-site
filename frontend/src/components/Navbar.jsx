import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

const Navbar = () => {
  
const navigate = useNavigate();

  return (
    <div className = "h-10 flex justify-between items-center text-2xl p-8 font-bold italic bg-violet-900 text-white">
      <p onClick={()=>navigate("/")} className="hover:text-violet-200 cursor-pointer">Products Store 🛒</p>
      <p className="bg-violet-300 p-1 rounded-2xl"><Link to="/add">➕</Link></p>
    </div>
  )
}

export default Navbar
