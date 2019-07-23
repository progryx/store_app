// Служебные импорты
import React, {Component} from 'react';
import {Route} from "react-router-dom";

// Компоненты и контейнеры
import UsersContainer from "./components/Hotels/HotelsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from './components/Hotel/HotelContainer.js';


// Стили
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import './App.css';



const App = (props) => {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-12"><HeaderContainer/></div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Route path="/" render ={ () =>  <UsersContainer/>  }/>
                            <Route path="/hotel/:userId?" render ={ () =>  <ProfileContainer/>  }/>
                        </div>
                    </div>
                </div>
        );
};

export default App;
