import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Login from './components/Login';


const routes = [
    {
        path : '',
        exact: true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact: false,
        main : () => <About />
    },
    {
        path : '/contact',
        exact: false,
        main : () => <Contact />
    },
    {
        path : '',
        exact: false,
        main : () => <NotFound />
    },
    {
        path : '/products',
        exact: false,
        main : () => <Products />
    },
    {
        path : '/login',
        exact: false,
        main : () => <Login />
    }
];

export default routes;