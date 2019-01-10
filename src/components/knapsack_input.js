import React, { Component } from 'react';
import TextField from 'material-ui/TextField'


export default class KnapsackInput extends Component {

    onInputChange(event) {
        var val = event.target.value;
        var validated = '100';
        if (!(isNaN(val) || (parseInt(val) > 200 ) || (parseInt(val) < 1)))   {
            validated = val;
            this.props.onInputPackChange(val);
        } else {
            event.target.value = validated
        }
    }

    render() {
        return (
            <div className="">
                <TextField
                    hintText="Content"
                    floatingLabelText="Enter the capacity of the knapsack"
                    fullWidth={true}
                    onChange={ event => this.onInputChange(event)}

                />
            </div>
        )
    }
}

