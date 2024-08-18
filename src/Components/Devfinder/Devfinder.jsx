import "./Devfinder.css";
import crusenticon from "../../assets/image/crusent-icon.png";
import  { ThemeContext } from "../../App";
import { useContext } from "react";

function Devfinder () {
    const theme = useContext(ThemeContext);


    function onClick(event) {
        if (theme.theme == "light"){
          theme.setTheme("dark");
        } else {
          theme.setTheme("light");
        }

      }

    return(
        <div id='Devfinderdiv'>
            <label id="devfinderlab">devfinder</label>
            <button value={theme.theme} id="Toggelbtn" onClick={onClick} >
                <label id="Darklab" >{theme.theme}</label>
                <img id="crusenticonimg" src={crusenticon}/>
            </button>
        </div>
    )
}

export default Devfinder ;