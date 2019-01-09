import React from 'react'
import Drawer from 'material-ui/Drawer'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import ActionHome from 'material-ui/svg-icons/action/home'
import {cyan500, deepOrange500, limeA400, pink500, purple600, tealA400} from 'material-ui/styles/colors'
import ContactIcons from 'material-ui/svg-icons/communication/contact-mail'




export const AppDrawer = (props) => {
    return (
        <Drawer
            open={props.open}
            docked={ false }
            onRequestChange={open => props.onToggle(open)}
        >
            <MenuItem
                rightIcon ={
                    <ActionHome
                        color={pink500}
                        hoverColor={purple600}
                    />
                }
            >
               Главная
            </MenuItem>
            <MenuItem
                rightIcon ={
                    <ContactIcons
                        color={limeA400}
                        hoverColor={tealA400}
                    />
                }
             >
             Контакты
            </MenuItem>
            <MenuItem
                rightIcon = {
                    <FontIcon
                        className="material-icons"
                        color={cyan500}
                        hoverColor={deepOrange500}
                    >
                        help
                    </FontIcon>
                }
            >
                О нас
            </MenuItem>
            <MenuItem
               rightIcon = {
                    <FontIcon
                       className="material-icons"
                       color={deepOrange500}
                       hoverColor={cyan500}
                    >
                       settings_phone
                    </FontIcon>
               }
            >Напишите нам</MenuItem>
        </Drawer>
    )
}