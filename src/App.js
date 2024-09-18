import { useState } from 'react';
import { useCookies } from 'react-cookie';
import Navigation from './components/Navigation';
import Home from './Home';
import './App.css';

function App() {
  const name = ["Li Jianing", "李嘉宁"];
  const about = ["Software developer", "CS + Math @ UoA"]
  const [cookies, setCookie] = useCookies(["dark"]);
  const [isDark, setDark] = useState(
    (typeof cookies["dark"] == "undefined") ?
    true :
    cookies["dark"]
  );
  if (isDark) document.body.classList.add("dark");

  return (
    <div className="App">
      <Navigation
        brand={name}
        isDark={isDark}
        onToggleTheme={() => {          
          setCookie("dark", !isDark, {path: "/", sameSite: "strict"});
          setDark(!isDark);
          document.body.classList.toggle("dark");
        }}
      />
      <Home name={name} about={about} isDark={isDark}/>
      <footer>
        {name.join(" | ")}<br />
        Powered by React.js + Flask<br />
        Icons by <a href="https://icons8.com/" rel="noreferrer" target="_blank">icons8.com</a>
      </footer>
    </div>
  );
}

export default App;
