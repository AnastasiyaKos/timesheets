import React, {useEffect} from 'react';
import NavigationMenu from "./NavigationMenu";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedNavItem} from "../../../store/slices/sidebarSlice/sidebarSlice";


const NavigationMenuContainer = () => {
  const navMenuText = useSelector(state => state.app.appText.sidebar.navMenu);
  const {nav: {data: navData, selectedNavItems}} = useSelector(state => state.sidebar);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!selectedNavItems) {
      dispatch(setSelectedNavItem(window.location.pathname.slice(1).split('/')[0]));
    }
  }, [selectedNavItems]);

  const handleClickNavItem = (itemName) => {
    dispatch(setSelectedNavItem(itemName));
  };

  return <NavigationMenu navData={navData} handleClickNavItem={handleClickNavItem} selectedNavItems={selectedNavItems}
                         navMenuText={navMenuText}/>
};

export default NavigationMenuContainer;