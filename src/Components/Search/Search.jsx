import { ThemeContext } from "../../App";
import { useContext } from "react";
import "./Search.css";
import Searchicon from "../../assets/image/Search-icon.png";


function Search () {
    const passedValues = useContext(ThemeContext);
    return(
        <div id="Searchdiv" className={`${passedValues.theme}Header`}>
            <div>
            <img id="Searchiconimg" src={Searchicon} alt="Search Icon"/>
            <input type="text" placeholder="Search GitHub username…"></input>
            </div>
            <button id="Searchbtn">Search</button>
        </div>
    )
}


export default Search;