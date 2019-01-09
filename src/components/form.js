import React from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'


export class AppForm extends React.Component{
    constructor (props){
        super(props)

        this.state = {
            name: '',
            size: '',
            price: '',
            errors: {
                name: '',
                size: '',
                price: ''
            }
        }
    }

    render(){
        return(
           <div>
               <TextField
                   hintText="Title"
                   floatingLabelText="Input title"
                   fullWidth={true}
                   errorText={this.state.errors.name}
                   onChange={(event, name) => this.setState({name})}
               />

               <TextField
                   hintText="Size"
                   floatingLabelText="Input size"
                   fullWidth={true}
                   errorText={this.state.errors.size}
                   onChange={(event, size) => this.setState({size})}
               />

               <TextField
                   hintText="Price"
                   floatingLabelText="Input price"
                   fullWidth={true}
                   errorText={this.state.errors.price}
                   onChange={(event, price) => this.setState({price})}
               />

               <FlatButton
                   label="Add unit"
                   secondary={true}
                   onClick = {this.onAdd.bind(this) }
               />
           </div>
        )
    }
    onAdd() {
        let errors = {}

        if(!this.state.name) errors.name = 'Name can not be empty'
        if(!this.state.size) errors.size = 'Size cannot be empty'
        if(!this.state.price) errors.price = 'Price cannot be empty'


        if(errors.name || errors.size || errors.price){
            this.setState({errors   })
            return
        }

        this.props.onAdd({
            name: this.state.name,
            size : this.state.size,
            price: this.state.price,
            checked: false
        })

        this.setState({name: '', size: '', price: '', errors: {
            name:'',
            size: '',
            price: ''
        }})
    }
}



