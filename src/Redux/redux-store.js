import {combineReducers, createStore} from "redux";
import friendsPanelReducer from "./friendsPanel-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({

    profilePage:profileReducer,
    dialogPage:dialogsReducer,
    sideBar:sidebarReducer,
    friendsPanel:friendsPanelReducer,
    usersPage:usersReducer,
    auth:authReducer
});

let store = createStore(reducers);
window.store = store;
export default store;