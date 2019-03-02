import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
        return (

            <BrowserRouter>
                <div className="app-wrapper">

                    <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/profile" render ={ () => <Profile  postsData={props.data.profilePage.posts} />  }/>
                        <Route path="/dialogs" render ={ () => <Dialogs messagesData={props.data.messagesPage.messages} dialogsData={props.data.messagesPage.dialogs} />  }/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>

        );
};

export default App;
