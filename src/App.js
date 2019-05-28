import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';


const App = (props) => {

        return (


                <div className="container">
                    <div className="row">
                        <div className="col-12"><Header/></div>
                    </div>

                    <div className="row">
                        <div className="col-4"><Navbar/></div>
                        <div className="col-8">
                            <Route path="/profile/:userId?" render ={ () =>  <ProfileContainer/>  }/>
                            <Route path="/dialogs" render ={ () => <DialogsContainer/>  }/>
                            <Route path="/users" render = { () => <UsersContainer/> }/>
                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/settings" component={Settings}/>
                        </div>
                    </div>
                </div>
        );
};

export default App;
