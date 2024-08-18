import { ThemeContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import "./Search.css";
import Searchicon from "../../assets/image/Search-icon.png";


function Search ({setdata,setloading}) {
    const passedValues = useContext(ThemeContext);
    const [user , setuser] = useState("Octocat");
const handleClick=async()=>{
    setloading(true);
    const data=await fetch('https://api.github.com/users/${user}');
    const userData=await data.json();
    setdata(userData);
    setloading(false);
}
useEffect(()=>{
    handleClick();
},[])

    return(
        <div id="Searchdiv" className={passedValues.theme + "Header"}>
            <div>
            <img id="Searchiconimg" src={Searchicon} alt="Search Icon"/>
            <input 
            value={user} 
            onChange={(event)=>setuser(event.target.value)}
            type="text" 
            placeholder="Search GitHub username…"></input>
            </div>
            <button onClick={handleClick} id="Searchbtn">Search</button>
        </div>
    )
}


export default Search;