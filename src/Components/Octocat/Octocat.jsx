import { ThemeContext } from "../../App";
import { useContext } from "react";
import "./Octocat.css";
import blobimg from "../../assets/image/blob.png";
import mapimg from "../../assets/image/map.png";
import twitterimg from "../../assets/image/xs-twitter-grey.png";
import linkimg from "../../assets/image/link.png";
import githubicon from "../../assets/image/@github.png";


function Octocat(
  key,
  avatar_url,
  name,
  login,
  public_repos,
  followers,
  following,
  location,
  blog,
  twitter_username,
  company,
  loading,
  date,
  bio
) {
    const passedValues = useContext(ThemeContext);
  return (
    <div id="Octocatdiv" className={passedValues.theme + "Header"}>
     (!loading? <img id="blobimg" src={avatar_url} />
      <div id="rightside">
        <div id="firstline">
          <label id="theoct">{name}</label>
          <p id="Join">Joined at {date}</p>
        </div>
        <label id="seclabel">{login}</label>
        <p id="Loremip">
          {bio}
        </p>
        <div id="followupdiv">
<div className="Followdiv">
    <label className="term">Repos</label>
    <label className="Num">{public_repos}</label>
</div>
<div className="Followdiv">
    <label className="term">Followers</label>
    <label className="Num">{followers}</label>
</div>
<div className="Followdiv">
    <label className="term">Following</label>
    <label className="Num">{following}</label>
</div>
        </div>
        <div id="contactdiv">
       <div className="line">
    <div className="imglink">
    <img className="IMGCONT" src={mapimg}/>
    <label className="LINK">{location?location:"Not Found"}</label>
    </div>
    <div className="imglink">
    <img className="IMGCONT" src={twitterimg}/>
    <label className="LINK">{twitter_username?twitter_username:"Not Avaliable"}</label>
    </div>
    </div>
    <div className="line">
    <div className="imglink">
    <img className="IMGCONT" src={linkimg}/>
    <label className="LINK">{blog?blog:"Not Found"}</label>
    </div>
    <div id="github" className="imglink">
    <img className="IMGCONT" src={githubicon}/>
    <label className="LINK">{company?company:"Not Found"}</label>
    </div>
    </div>
</div>
      </div> :<div className="rounded-full h-4 w-4 border border-dark-blue border-t-transparent animate-spin"></div>)
    </div>
  );
}

export default Octocat;
