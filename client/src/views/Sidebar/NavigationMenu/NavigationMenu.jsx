import React from 'react';
import {Wrapper} from "../Sidebar.style";
import {List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

const NavigationMenu = ({navData, navMenuText, selectedNavItems, handleClickNavItem}) => {

  return <Wrapper>
    <List
      sx={{width: "100%", maxWidth: 360, paddingTop: 0}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {navData.map(item => {
        const color = selectedNavItems === item.name ? '#FC7F25' : '#629881';
        const background = selectedNavItems === item.name ? '#62988138' : 'inherit';
        return (
          <div key={item.name} id={item.name} style={{color: color, background: background}}>
          <ListItemButton
            variant="selectedNavItem"
            component={item.link ? RouterLink : undefined}
            to={item.link || "#"}
            selected={selectedNavItems === item.name}
            onClick={() => handleClickNavItem(item.name)}
          >
            <ListItemIcon sx={{minWidth: 'auto', marginRight: '16px'}}>
              <item.icon viewBox={'0 0 16 16'}
                         sx={{fontSize: '18px', '& path': {fill: color}}}/>
            </ListItemIcon>
            <ListItemText sx={{color: color, 'span': {fontSize: '14px'}}}>
              {navMenuText[item.name]}
            </ListItemText>
          </ListItemButton>
        </div>
        )
      })}
    </List>
  </Wrapper>
};

export default NavigationMenu;