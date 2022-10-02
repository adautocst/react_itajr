import './App.css';
import Login from './Login.js'
import './Menu.css';
import About from './About.js'
import Home from './Home.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className='Menu'>
          <h1>ITA JR</h1>
            <div class="menu-items">
              <p><Link to = "/home">Home</Link></p>
              <p><Link to = "/about">About</Link></p>
              <p><Link to = "/login">Login</Link></p>
            </div>
          </div>

          <img
        src="http://www.aeitaonline.com.br/wiki/images/thumb/7/76/ITA_J%C3%BAnior.jpg/700px-ITA_J%C3%BAnior.jpg"
        alt="logo ita jr"
        />

          <Routes>
            <Route path="/home" element = {<Home/>}/>  
            <Route path="/login" element = {<Login/>}/>
            <Route path="/about" element = {<About/>}/>
          </Routes>
        
      </Router>
    </div>
  );
}

export default App;
