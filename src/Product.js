import React, { Component } from 'react';
import Filters from './Filters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

var PRODUCTS = {
    '1': { id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet' },
    '2': { id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello' },
    '3': { id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano' },
    '4': { id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge' },
    '5': { id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table' },
    '6': { id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag' },
    '7': { id: 7, category: 'Furniture', price: '$100', stocked: true, name: 'Chair' }
};

class Product extends Component {
    constructor(props) {
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this. saveProduct = this.saveProduct.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
        this.state = {
            filterText: '',
            isStockOnly: false,
            products: PRODUCTS
        };
    }

    handleFilterChange(filterInput){
        this.setState(filterInput);
    }
    saveProduct(product){
        product.id = new Date().getTime();
        this.setState((prevState) => {
            let products = prevState.products;
            products[product.id] = product;
            return {products}
        });
    }

    handleDestroy(productId){
        this.setState((prevState) => {
            var products = prevState.products;
            delete products[productId];
            return {products}
        });
    }
    render() {
        return (
            <div style={{margin:"30px 0px 30px 50px", backgroundColor:"#FFF1C4"}}>
                <Filters
                    filterText={this.state.filterText}
                    isStockOnly={this.state.isStockOnly}
                    handleChange={this.handleFilterChange}
                ></Filters>
                <ProductTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    isStockOnly={this.state.isStockOnly}
                    onDestroy={this.handleDestroy}
                ></ProductTable>
                <ProductForm onSave={this.saveProduct}></ProductForm>
            </div>
        );
    }
}

export default Product;