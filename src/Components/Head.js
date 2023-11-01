import { AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { togglemenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
const Header = () => {
  const [searchBox, setSearchBox] = useState("");
  const[suggestionbox,setSuggestionbox]=useState([])
  useEffect(() => {
    

    const timer = setTimeout(() => {
     getsearchsuggestion();
    }, 200) 
    
    return () => {
      clearTimeout(timer)
    }
  }, [searchBox]);

  const getsearchsuggestion = async () => {
    console.log("api_call - +" ,searchBox);
    const data = await fetch(YOUTUBE_SEARCH_API + searchBox)
    const json = await data.json()
    setSuggestionbox(json[1])
    //console.log(json[1]);
  }

  const Dispatch = useDispatch();

  const MenuHandler = () => {
    Dispatch(togglemenu());
  };

  return (
    <div className="flex bg-gray-400 h-20 mt-3 items-center justify-between shadow-lg">
      <div className="flex gap-4">
        <AiOutlineMenu
          size={40}
          onClick={() => {
            MenuHandler();
          }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0M2jHouIZctDXisRo63fz34fOoTVtEuQosg&usqp=CAU"
          className="h-10 border-w-0"
        />
      </div>

      <div>
        <input
          type="text"
          onChange={(e) => {
            setSearchBox(e.target.value);
          }}
          value={searchBox}
        />
        {console.log(searchBox)}
        <button>Search</button>
      </div>
      
        <div className=" fixed ml-[713px] mt-[270px] bg-white w-[300px] rounded-lg pl-3">
          <ul >
            {suggestionbox.map((s) => (
              <li className="shadow-lg">{s}</li>
            ))}
          </ul>
        </div>
      

      <div>
        <FaUserAlt size={30}/>
      </div>
    </div>
  );
};
export default Header;
