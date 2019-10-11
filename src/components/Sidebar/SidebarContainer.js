import React from 'react';
import Sidebar from "./Sidebar";

const SidebarContainer = (props) => {

    return (<Sidebar sideBar={props.store.getState().sideBar}/>);
};
export default SidebarContainer;
