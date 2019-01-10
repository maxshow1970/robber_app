import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

const style = {
    marginRight: 20
}

export default class SortKnByButtons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameASC: true,
            sizeASC: true
        }
    }


    changeOrder(type, term) {
        (type === 'nameASC') ?  this.setState({nameASC: term}) :  this.setState({sizeASC: term})
        this.props.sortKnList({type, term})
    }

    render() {
        return (
            <div className="toolbar">
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

