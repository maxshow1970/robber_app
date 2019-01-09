import React from 'react'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'



export const AppListRobber = (props) => {
    return(
        <List>
            {props.items.map((item, index )=>{
                return(
                    <div key={index}>
                        <ListItem
                            primaryText = {<p>item.name</p>}
                            secondaryText = {
                                <p>
                                    <span>"Size = " { item.size} </span><br/>
                                    <span>"Price =" {item.price}</span>
                                </p>
                            }
                            secondaryTextLines = {2}
                            leftCheckbox={
                                <Checkbox
                                    checkedIcon={<ActionFavorite />}
                                    uncheckedIcon={<ActionFavoriteBorder />}
                                    checked={item.checked}
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