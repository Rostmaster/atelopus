import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsPanelReducer from "./friendsPanel-reducer";

let reducers = combineReducers({

    profilePage:profileReducer,
    dialogPage:dialogsReducer,
    sideBar:sidebarReducer,
    friendsPanel:friendsPanelReducer
});

let store = createStore(reducers);
window.store = store;
export default store;