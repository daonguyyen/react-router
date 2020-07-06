import React, { Component } from 'react';

class Product extends Component {
    render() {

        var {match} = this.props
        // console.log(match)
        var name = match.params.name;
        console.log(name)
        return (
            <div>
                <h4>This is detail of product : {name}</h4>
            </div>
        );
    }
}

export default Product;