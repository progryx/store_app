import React from 'react';
import {NavLink} from "react-router-dom";

let Hotels = (props) => {
    //debugger;

    return <div>

        {

            props.hotels.map(u =>

                <div key={u.id} className="card">
                    <div className="row">
                        <div className="col-4">
                            <NavLink to={'/hotel/' + u.id}>{u.name}</NavLink>
                            <NavLink to={'/hotel/' + u.id}>
                                <img className="img-thumbnail" src={u.image}
                                     alt=""/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div>{u.description}</div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>

};

export default Hotels;