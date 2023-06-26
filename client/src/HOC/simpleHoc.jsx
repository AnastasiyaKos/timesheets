import React from "react";

const simpleHOC = (Component) => (props) => <Component {...props}/>

export default simpleHOC;
