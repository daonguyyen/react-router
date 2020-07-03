import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import NotFound from './components/NotFound';




function App() {
  return (
    <Router>

      <div className="App">

        {/* Menu */}
        <Menu/>
        {/* Content */}
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/contact"><Contact /></Route>
          <Route><NotFound/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Custom thi dung Link, su dung co san thi dung NavLink