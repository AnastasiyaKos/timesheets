import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Container } from "@mui/material";
import simpleHOC from "../../HOC/simpleHoc";
import BaseTableContainer from "../../components/BaseTable/BaseTableContainer";
import BaseFormContainer from "../../components/BaseForm/BaseFormContainer";


const MainBox = () => {
  // let { pathname } = useLocation();
  let WrapBaseTable = simpleHOC(BaseTableContainer);
  let WrapBaseForm = simpleHOC(BaseFormContainer);

  return (
    <Container component="main" style={{padding: '20px'}}>
      <Routes>
        <Route path="*" element={<Navigate to="/timesheets" />} />

        <Route path='/users' element={<WrapBaseTable/>}/>
        <Route path='/users/:id' element={<WrapBaseForm/>}/>

        <Route path='/billables' element={<WrapBaseTable/>}/>
        <Route path='/billables/:id' element={<h1>billable form</h1>}/>

        <Route path='/budgets' element={<WrapBaseTable/>}>
          <Route path=':id' element={<h1>budget form</h1>}/>
        </Route>
        <Route path='/projects' element={<WrapBaseTable/>}>
          <Route path=':id' element={<h1>project form</h1>}/>
        </Route>
        <Route path='/roles' element={<WrapBaseTable/>}>
          <Route path=':id' element={<h1>role form</h1>}/>
        </Route>
        <Route path='/salaries' element={<WrapBaseTable/>}>
          <Route path=':id' element={<h1>salary form</h1>}/>
        </Route>
        <Route path='/skills' element={<WrapBaseTable/>}>
          <Route path=':id' element={<h1>skill form</h1>}/>
        </Route>
        <Route path='/tasks' element={<WrapBaseTable/>}>
          <Route path=':id' element={<h1>task form</h1>}/>
        </Route>
        <Route path='/statuses' element={<WrapBaseTable/>}>
          <Route path=':id' element={<h1>status form</h1>}/>
        </Route>
        <Route path='/timesheets' element={<WrapBaseTable/>}>
          <Route path=':id' element={<h1>timesheet form</h1>}/>
        </Route>
      </Routes>
    </Container>
  )
};

export default MainBox;
