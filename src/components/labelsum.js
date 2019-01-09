import React, { Component } from 'react'
import TextField from 'material-ui/TextField'




export default class LabelSum extends Component {

  render(){

        return (
            <div>
                <TextField
                    disabled={true}
                    defaultValue={'Selected: '+  this.props.selectedSum+' of '+ this.props.sizeKnapsack}
                    style={{fontWeight: 'bold'}}
                />
            </div>
        )
}
}