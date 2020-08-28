import React from 'react';

class ProductForm extends React.Component{

    constructor(props){
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            product: {}
        };
    }

    handleSave(e){
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, {})
        });
        e.preventDefault();
    }

    handleChange(e){
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState((prevState) => {
            prevState.product[name] = value;
            return {product: prevState.product}
        });
    }
    render(){


        return(
            <form align="left">
                <h3>Ender a new product</h3>
                <p>
                    <label>
                        Name
                        <br />
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name} />
                    </label>
                </p>
                <p>
                    <label>
                        Category
                        <br />
                        <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category}/>
                    </label>
                </p>
                <p>
                    <label>
                        Price
                        <br />
                        <input type="text" name="price" onChange={this.handleChange} value={this.state.product.price}/>
                    </label>
                </p>
                <p>
                    <label>
                        <br />
                        <input type="checkbox" name="stocked" onChange={this.handleChange} value={this.state.product.stocked}/>
                        In stock?
                    </label>
                </p>
                <input type="submit" value="Save" onClick={this.handleSave}/>
            </form>

        );
    }
}

export default ProductForm;