import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import routes from './routes';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';



class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">

          {/* Menu */}
          <Menu />
          {/* Content */}
          <Switch>
            {/* {this.showContentMenu(routes)} */}
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/products' component={Products}/>
            <Route path='/' component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
  // showContentMenu =(routes) => {
  //   var result = null;
  //   if(routes.length > 0){
  //     result = routes.map((route, index) =>{
  //       return (
  //         <Route
  //           key = {index}
  //           path = {route.path}
  //           exact = {route.exact}
  //           component = {route.main} 
  //         />
  //       )
  //     });
  //   }
  //   return result;
  // }
}

export default App;

//Custom thi dung Link, su dung co san thi dung NavLink