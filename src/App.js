import './App.css';
import React from 'react';
import {Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Navigation from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';


const App = (props) => {

  return (
      <div className='app-wrapper'>

        <Header/>
        <Navigation sideBar={props.state.sideBar}/>

        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={() =>
              <Dialogs
                  dialogPage={props.state.dialogPage}
                  dispatch={props.dispatch}/>}
          />

          <Route path='/profile' render={() =>
              <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}/>}
          />

          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/news' component={News}/>

        </div>

      </div>
  )
};

export default App;