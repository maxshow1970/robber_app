import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox'


export const KnackpackList = (props) => {
    return(
        <List>
            {props.itemsK.map((itemK, index )=>{
                return(
                    <div key={index}>
                        <ListItem
                            primaryText = <p>{itemK.name}</p>
                        secondaryText = {
                        <p>
                            <span>Size =  { itemK.size} </span><br/>
                            <span>Price = {itemK.price}</span>
                        </p>
                    }
                        secondaryTextLines = {2}
                        leftCheckbox={
                        <Checkbox
                            checked={itemK.checked}
                            onCheck = {(event, isInputChecked) => props.onCheck(isInputChecked, index )}
                        />
                    }
                        />
                        <Divider/>
                    </div>
            )
            })}
        </List>
    )
}