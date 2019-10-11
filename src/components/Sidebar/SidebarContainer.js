import React from 'react';
import Sidebar from "./Sidebar";
import StoreContext from "../../StoreContext";

const SidebarContainer = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                return (
                    <Sidebar sideBar={store.getState().sideBar}/>
                );
            }
        }
        </StoreContext.Consumer>
    );
};
export default SidebarContainer;
