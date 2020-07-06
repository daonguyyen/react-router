import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menu = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'About',
    to: '/about',
    exact: false
  }, {
    name: 'Contact',
    to: '/contact',
    exact: false
  },
  {
    name : 'Login',
    to: './login',
    exact : false
  },
  {
    name : 'Product',
    to: './products',
    exact : false
  }
]

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
        {this.showMenus(menu)}
      </ul>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact} />
        )
      })
    }
    return result;
  }

}

export default Menu;