import "./Devfinder.css";
import crusenticon from "../../assets/image/crusent-icon.png";
import  { ThemeContext } from "../../App";
import { useContext } from "react";

function Devfinder () {
    const theme = useContext(ThemeContext);

    function onClick(event) {
        let newValue;
        if (event.target.checked == false){
          newValue ="light";
        } else {
          newValue ="dark";
        }
    theme.setTheme(newValue);
    console.log(newValue)
      }

    return(
        <div id='Devfinderdiv'>
            <label id="devfinderlab">devfinder</label>
            <button id="Toggelbtn" onClick={onClick} >
                <label id="Darklab">DARK</label>
                <img id="crusenticonimg" src={crusenticon}/>
            </button>
        </div>
    )
}

export default Devfinder ;