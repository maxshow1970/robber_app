import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { red700,  } from "material-ui/styles/colors"
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar'

const style = {
    marginRight: 20
}

export const KnackpackButtons = (props) => {
    return(

        <div style={{marginBottom: 40}}>
            <Toolbar>
                <ToolbarGroup>
                    <RaisedButton
                        label="Delete"
                        backgroundColor={red700}
                        onClick = {() => props.onDelete()}
                        labelColor="#fff"
                        style={style}
                        disabled={props.itemsKChecked.length === 0 }
                    />
                </ToolbarGroup>
            </Toolbar>
        </div>
    )
}
