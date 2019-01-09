import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { red700, indigo500 } from "material-ui/styles/colors"
import {Toolbar, ToolbarGroup,ToolbarSeparator} from 'material-ui/Toolbar'

const style = {
    marginRight: 5
}

export const AppButtons = (props) => {
    return(

        <div style={{marginBottom: 40}}>
            <Toolbar>
              <ToolbarGroup>
                <RaisedButton
                    label="Add"
                    onClick = {(event) => props.onAdd(event.currentTarget)}
                    primary={true}
                    style={style}
                />
                <RaisedButton
                    label="Edit"
                    onClick = {(event) => props.onAdd(event.currentTarget)}
                    primary={true}
                    style={style}
                    disabled={props.itemsChecked.length === 0 || props.itemsChecked.length > 1}
                />
                <RaisedButton
                    label="Delete"
                    backgroundColor={red700}
                    onClick = {() => props.onDelete()}
                    labelColor="#fff"
                    style={style}
                    disabled={props.itemsChecked.length === 0 }
                />
                <ToolbarSeparator />
                  <RaisedButton
                      label="Copy to =>"
                      backgroundColor={indigo500}
                      onClick = {() => props.onCopy()}
                      labelColor="#fff"
                      style={style}
                      disabled={props.itemsChecked.length === 0 }
                  />
              </ToolbarGroup>
            </Toolbar>
        </div>
    )
}
