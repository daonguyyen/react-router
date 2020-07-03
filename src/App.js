import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <Router>

      <div className="App">

        {/* Menu */}
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
        {/* Content */}
        <Route exact path="/"><Home /></Route>
        <Route path="/about"> <About /> </Route>
        <Route path="/contact"><Contact/></Route>
      </div>
    </Router>
  );
}

export default App;
