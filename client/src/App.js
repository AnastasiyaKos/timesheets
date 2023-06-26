import React from 'react';
import {Route, Routes} from "react-router-dom";
import SidebarContainer from "./views/Sidebar/SidebarContainer";
import MainBox from "./views/MainBox/MainBox";
import {Box} from "@mui/material";
// import useScript from './hooks/useScript';


function App() {

  return (
    <div className="App" style={{background: '#629881'}}>
      <Routes>
        {/*<Route path="/login" element={<LoginContainer/>}/>*/}
        <Route
          path="*"
          element={
            <Box sx={{display: "flex", minHeight: "100vh", position: "relative"}}>
              {/*<AppHeaderContainer/>*/}
              <SidebarContainer/>
              <MainBox/>
              {/*<AppProgress/>*/}
            </Box>
          }
        />
      </Routes>
    </div>
  )
}

export default App;
