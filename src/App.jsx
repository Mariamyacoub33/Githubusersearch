import './App.css';
import Devfinder from "./Components/Devfinder/Devfinder";
import Search from "./Components/Search/Search";
import Octocat from "./Components/Octocat/Octocat";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme ,setTheme] = useState("light");
  const [data , setdata] = useState({});
  const [loading ,setloading] = useState(true);

  return (
<>
<ThemeContext.Provider value={{theme , setTheme}}>
  <div id='main'>
    <Devfinder></Devfinder>
<Search setdata={setdata} setloading={setloading}></Search>
<Octocat
key={data.key}
avatar_url={data.avatar_url}
name={data.name}
login={data.login}
public_repos={data.public_repos}
followers={data.followers}
following={data.following}
location={data.location}
blog={data.blog}
twitter_username={data.twitter_username}
company={data.company}
date={data.created_at?.split("t")[0]}
bio={data.bio}
loading={loading}
></Octocat>
</div>
</ThemeContext.Provider>
    </>
  )
}

export default App;