import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={ ({ match }) => {
        var active = match ? 'active testClass' : '';
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        ) 
    }}/>
  )
}


function App() {
  return (
    <Router>

      <div className="App">
          
        {/* Menu */}
        <ul className="nav justify-content-center">
          <MenuLink label="Home" to="/" activeOnlyWhenExact={true}/>
          <MenuLink label="About" to="/about"/>
          <MenuLink label="Contact" to="/contact"/>
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

//Custom thi dung Link, su dung co san thi dung NavLink