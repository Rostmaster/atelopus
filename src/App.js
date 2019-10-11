import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";


const App = (props) => {

    return (
        <div className='app-wrapper'>

            <Header/>
            <SidebarContainer store={props.store}/>

            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() =>
                    <DialogsContainer store={props.store}/>
                }/>

                <Route path='/profile' render={() =>
                    <Profile store={props.store}/>}
                />

                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/news' component={News}/>

            </div>

        </div>
    )
};

export default App;