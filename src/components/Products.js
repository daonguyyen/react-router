import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product  from './Product'

class Products extends Component {
    render() {
        var products = [
            {
                id: 1,
                name: 'iPhone X',
                price: 3000,
                slug: 'iphone'
            },
            {
                id: 2,
                name: 'Samsung Galaxy',
                price: 1000,
                slug: 'samsung'
            },
            {
                id: 3,
                name: 'Oppo Fi1s',
                price: 900,
                slug: 'oppo'
            },
        ]

        var {match} = this.props;
        var url = match.url;
        // console.log(match);

        var result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item" >
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        })
        return (
            <div>
                <h1>Danh sach san pham</h1>
                <div className="row">
                    <div className="d-flex align-item-center">
                        <ul className="list-group">
                            {result}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <Route path="/products/:name" component={Product} />
                </div>
            </div>
        );
    }
}

export default Products;