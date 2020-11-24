import React, { Component } from 'react';

class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }
    
    render() { 
        return ( 
            <form>
                <input type="checkbox"></input>
                <label htmlFor={"checkBox_" + this.state.id}>Checkbox</label>
            </form>
        );
    }
}
 
export default Checkbox;
