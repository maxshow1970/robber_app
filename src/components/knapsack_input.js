import React, { Component } from 'react';
import TextField from 'material-ui/TextField'


export default class KnapsackInput extends Component {
    // constructor(props) {
    //     super(props);
    // }


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

                    // defaultValue={ this.state.sizeKnapsack}
                    // errorText={this.state.errors.description}
                    // onChange={(event, sizeKnapsack) => this.setState({sizeKnapsack})}
                  //  onChange={ event => this.onInputChange(event.target.value)}
                    onChange={ event => this.onInputChange(event)}

                />
                {/*<input className="form-control"*/}
                       {/*type="text"*/}
                       {/*placeholder="Search by name..."*/}
                       {/*onChange={ event => this.onInputChange(event.target.value)} />*/}
            </div>
        )
    }
}

