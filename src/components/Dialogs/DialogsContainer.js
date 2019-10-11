import React from 'react';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>{
            (store) => {
                let sendMessage = () => {
                    let action = sendMessageActionCreator();
                    store.dispatch(action);
                };

                let updateMessage = (MESSAGE) => {

                    let action = updateNewMessageTextActionCreator(MESSAGE);
                    store.dispatch(action);
                };
                return (
                    <Dialogs sendMessage={sendMessage}
                             onMessaageChange={updateMessage}
                             dialogPage={store.getState().dialogPage}/>
                );
            }
        }</StoreContext.Consumer>);
};

export default DialogsContainer
