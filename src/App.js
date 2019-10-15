import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import FriendsPanelContainer from "./components/Sidebar/FriendsPanel/FriendsPanelContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";

const App = () => {

    return (

        <div className='app-wrapper'>
            <Header className='header'/>
            <div className='navigation'>
                <SidebarContainer/>
                <FriendsPanelContainer/>
            </div>
            <div className='app-wrapper-content'>

                <Route path='/dialogs'  render={() => <DialogsContainer/>}/>
                <Route path='/profile'  render={() => <Profile/>}/>
                <Route path='/music'    render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/news'     render={() => <News/>}/>

            </div>
        </div>
    )
};

export default App;