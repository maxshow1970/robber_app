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
                {/*<button className="btn btn-default" onClick={()=>this.changeOrder('nameASC', !this.state.nameASC)}>*/}
                    {/*<i className="icon fa fa-sort-alpha-asc"></i>*/}
                    {/*<span>Sort by name</span>*/}
                {/*</button>*/}
                {/*<button className="btn btn-default" onClick={()=>this.changeOrder('ageASC', !this.state.ageASC)}>*/}
                    {/*<i className="icon fa fa-sort-numeric-desc"></i>*/}
                    {/*<span>Sort by age</span>*/}
                {/*</button>*/}
            </div>
        )
    }
}

export default SortByButtons