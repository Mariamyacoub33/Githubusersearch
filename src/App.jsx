import './App.css';
import Devfinder from "./Components/Devfinder/Devfinder";
import Search from "./Components/Search/Search";
import Octocat from "./Components/Octocat/Octocat";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme ,setTheme] = useState("light");

  return (
<>
<ThemeContext.Provider value={{theme , setTheme}}>
    <Devfinder></Devfinder>
<Search></Search>
<Octocat></Octocat>
</ThemeContext.Provider>
    </>
  )
}

export default App;