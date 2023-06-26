import React from 'react';
import {Stack, Button} from "@mui/material";
import {Header, Wrapper} from "./Sidebar.style";
import NavigationMenuContainer from "./NavigationMenu/NavigationMenuContainer";


const Sidebar = () => {

  return <Wrapper>
    <Stack sx={{overflow: 'visible', height: '100%'}}>
      <Header>Имя Фамилия</Header>
      <NavigationMenuContainer/>
    </Stack>
    <Button variant={'orange'} sx={{padding: '16px', margin: '18px 20px'}}>Выход из аккаунта</Button>
  </Wrapper>
};

export default Sidebar;