// Служебные импорты
import React, {Component} from 'react';
import {Route} from "react-router-dom";

// Компоненты и контейнеры
import HeaderContainer from "./components/Header/HeaderContainer";
import DefaultContainer from "./components/Default/DefaultContainer";
import Login from "./components/Login/Login";
import ProductsContainer from "./components/Products/ProductsContainer";

// Стили
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import './App.css';
import Signup from "./components/Signup/Signup";






const App = (props) => {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-12"><HeaderContainer/></div>
                    </div>

                    <div className="row">
                        <div className="col-12">

                            <Route exact path="/" render ={ () =>  <DefaultContainer/>  }/>
                            <Route exact path="/login" render ={ () =>  <Login/>  }/>
                            <Route exact path="/store" render ={ () =>  <ProductsContainer/>  }/>
                            <Route exact path="/signup" render ={ () =>  <Signup/>  }/>

                        </div>
                    </div>
                </div>
        );
};

export default App;
