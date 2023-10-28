import { AiOutlineMenu } from "react-icons/ai";
import {FaUserAlt} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { togglemenu } from "../utils/appSlice";
const Header = () => {
  const Dispatch = useDispatch()

  const MenuHandler = () => {
       Dispatch(togglemenu())
  };

    return (
      <div className="flex bg-gray-400 h-20 mt-3 items-center justify-between shadow-lg">
        <div className="flex gap-4">
          <AiOutlineMenu size={40} onClick={() => {
            MenuHandler()
          }}/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0M2jHouIZctDXisRo63fz34fOoTVtEuQosg&usqp=CAU" className="h-10 border-w-0" />
        </div>

        <div>
          <input type="text" />
          <button>Search</button>
        </div>

        <div>
          <FaUserAlt size={30}/>
        </div>
      </div>
    ); 
    
    
}
export default Header