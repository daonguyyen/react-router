import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
function App() {
  return (
    <Router>

      <div className="App">

        {/* Menu */}
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
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
