// Служебные импорты
import React, {Component} from 'react';
import {Route} from "react-router-dom";

// Компоненты и контейнеры
import HotelsContainer from "./components/Hotels/HotelsContainer";
import Header from "./components/Header/Header";
import HotelContainer from './components/Hotel/HotelContainer.js';


// Стили
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import './App.css';



const App = (props) => {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-12"><Header/></div>
                    </div>

                    <div className="row">
                        <div className="col-12">

                            <Route exact path="/" render ={ () =>  <HotelsContainer/>  }/>
                            <Route path="/hotel/:hotelId?" render ={ () =>  <HotelContainer/>  }/>
                        </div>
                    </div>
                </div>
        );
};

export default App;
