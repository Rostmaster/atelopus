import {updateNewMessageTextActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: () => {
            let action = sendMessageActionCreator();
            debugger;
            dispatch(action);
        },
        onMessageChange: (MESSAGE) => {
            let action = updateNewMessageTextActionCreator(MESSAGE);
            dispatch(action);
        }
    };
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;
