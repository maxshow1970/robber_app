 import React from 'react'
 import AppBar from 'material-ui/AppBar'
 import {  indigo700, grey50 } from "material-ui/styles/colors"
 import IconMenu from 'material-ui/IconMenu'
 import MenuItem from 'material-ui/MenuItem'
 import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
 import IconButton from  'material-ui/IconButton'



 const RightMenu = () => (
     <IconMenu
         iconButtonElement={
             <IconButton>
                 <MoreVertIcon color = { grey50 }/>
             </IconButton>
         }
         targetOrigin={{horizontal: 'right', vertical: 'top'}}
         anchorOrigin={{horizontal: 'right', vertical: 'top'}}
     >
         <MenuItem primaryText="Refresh" />
         <MenuItem primaryText="Help" />
         <MenuItem primaryText="Sign out" />
     </IconMenu>
 );


 export const AppHeader = (props) => {
    return(

        <AppBar
            title="Robber App"
            // iconClassNameRight="muidocs-icon-navigation-expand-more"
            style ={{background : indigo700}}
            iconElementRight={<RightMenu />}
            onLeftIconButtonClick = { () => props.onLeftIconClick( )}

        />
    )
 }