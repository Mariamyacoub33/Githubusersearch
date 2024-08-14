import { ThemeContext } from "../../App";
import { useContext } from "react";
import "./Octocat.css";
import blobimg from "../../assets/image/blob.png";
import mapimg from "../../assets/image/map.png";
import twitterimg from "../../assets/image/xs-twitter-grey.png";
import linkimg from "../../assets/image/link.png";
import githubicon from "../../assets/image/@github.png";


function Octocat() {
    const passedValues = useContext(ThemeContext);
  return (
    <div id="Octocatdiv" className={`${passedValues.theme}Header`}>
      <img id="blobimg" src={blobimg} />
      <div id="rightside">
        <div id="firstline">
          <label id="theoct">The Octocat</label>
          <p id="Join">Joined 25 Jan 2011</p>
        </div>
        <label id="seclabel">@octocat</label>
        <p id="Loremip">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div id="followupdiv">
<div className="Followdiv">
    <label className="term">Repos</label>
    <label className="Num">8</label>
</div>
<div className="Followdiv">
    <label className="term">Followers</label>
    <label className="Num">3938</label>
</div>
<div className="Followdiv">
    <label className="term">Following</label>
    <label className="Num">9</label>
</div>
        </div>
        <div id="contactdiv">
       <div className="line">
    <div className="imglink">
    <img className="IMGCONT" src={mapimg}/>
    <label className="LINK">San Francisco</label>
    </div>
    <div className="imglink">
    <img className="IMGCONT" src={twitterimg}/>
    <label className="LINK">Not Available</label>
    </div>
    </div>
    <div className="line">
    <div className="imglink">
    <img className="IMGCONT" src={linkimg}/>
    <label className="LINK">https://github.blog</label>
    </div>
    <div id="github" className="imglink">
    <img className="IMGCONT" src={githubicon}/>
    <label className="LINK">@github</label>
    </div>
    </div>
</div>
      </div>
    </div>
  );
}

export default Octocat;
