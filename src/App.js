import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <Router>

      <div className="App">

        {/* Menu */}
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link to="/about">About</Link>
          </li>
        </ul>
        {/* Content */}
        <Route exact path="/"><Home /></Route>
        <Route path="/about"> <About /> </Route>
      </div>
    </Router>
  );
}

export default App;
