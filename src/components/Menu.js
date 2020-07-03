import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
        var active = match ? 'active testClass' : '';
        return (
          <li className={`my-class ${active}`}>
            <Link to={to}>{label}</Link>
          </li>
        )
      }} />
    )
  }

class Menu extends Component {
    render() {
        return (
            <ul className="nav justify-content-center">
                <MenuLink label="Home" to="/" activeOnlyWhenExact={true} />
                <MenuLink label="About" to="/about" />
                <MenuLink label="Contact" to="/contact" />
            </ul>
        );
    }
}

export default Menu;