import React from 'react';
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    };

    let updateMessage = (MESSAGE) => {

        let action = updateNewMessageTextActionCreator(MESSAGE);
        props.store.dispatch(action);
    };
    return (
        <Dialogs sendMessage={sendMessage}
                 onMessaageChange={updateMessage}
                 dialogPage={props.store.getState().dialogPage}
        />);
};

export default DialogsContainer
