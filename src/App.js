import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Navigation from './components/Navigation';
import Home from './Home';
import Projects from './Projects';
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
      <Router>
        <Navigation
          brand={name}
          isDark={isDark}
          onToggleTheme={() => {          
            setCookie("dark", !isDark, {path: "/", sameSite: "strict"});
            setDark(!isDark);
            document.body.classList.toggle("dark");
          }}
        />
        <Routes>
          <Route
            path='/'
            element={<Home name={name} about={about} isDark={isDark} />}
          />
          <Route
            path='/projects'
            element={<Projects />}
          />
        </Routes>
      </Router>
      <footer>
        {name.join(" | ")}<br />
        Powered by React.js + Flask<br />
        Icons by <a href="https://icons8.com/" rel="noreferrer" target="_blank">icons8.com</a>
      </footer>
    </div>
  );
}

export default App;
