import React from 'react';

class Filters extends React.Component {

    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(e){
        let value = e.target[e.target.type === "checkbox" ? "checked" : "value"];
        let name = e.target.name;

        this.props.handleChange({
            [name]: value
        });
    }

    render() {
        return (
            <form align="left">
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleInputChange}
                    name="filterText"
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.isStockOnly}
                        onChange = {this.handleInputChange}
                        name="isStockOnly"
                    />
                    Only show stocked products
                </p>
            </form>
        );
    }
}

export default Filters;