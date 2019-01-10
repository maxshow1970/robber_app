import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

const style = {
    marginRight: 20
}

class SortByButtons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameASC: true,
            sizeASC: true
        }
    }


    changeOrder(type, term) {
        (type === 'nameASC') ?  this.setState({nameASC: term}) :  this.setState({sizeASC: term})
        this.props.sortList({type, term})
    }

    render() {
        return (
            <div className="toolbar form-group">
                <RaisedButton
                    label="Sort by name"
                    onClick={()=>this.changeOrder('nameASC', !this.state.nameASC)}
                    secondary={true}
                    icon={ <FontIcon className="material-icons" >sort</FontIcon>}
                    style={style}
                />
                <RaisedButton
                    label="Sort by size"
                    onClick={()=>this.changeOrder('ageASC', !this.state.sizeASC)}
                    secondary={true}
                    icon={ <FontIcon className="material-icons" >sort</FontIcon>}
                    style={style}
                />
            </div>
        )
    }
}

export default SortByButtons
