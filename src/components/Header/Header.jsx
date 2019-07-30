// imports
import React, {useEffect, useState} from 'react';
import header from './Header.module.css';
import {NavLink} from "react-router-dom";
import ReactModal from 'react-modal';

// main function
const Header = (props) =>  {

    // Hooks
    const [opened, setOpened] = useState(false);
    const [count, setCount] = useState(0);

    useEffect( () => {
       setCount(Object.keys(props.cart).length);
    });


  //  debugger;

        return (
            <div className={header.header}>
                <div className="row">
                    <div className="col-4"><NavLink to="/"><img
                        src="https://rephonesatx.com/wp-content/uploads/2016/04/WHITE-LOGO-V3-3.png"
                        alt=""/></NavLink></div>
                    <div className="col-8">
                        <ul className="nav justify-content-end">
                            <li className="nav-item"><NavLink className={'nav-link'} activeClassName={'active'}
                                                              to="/store">Store</NavLink></li>
                            {!props.isAuth &&
                            <li className="nav-item"><NavLink a to="/signup">Sign Up</NavLink></li>}
                            {!props.isAuth && <li className="nav-item"><NavLink to="/login">Log In</NavLink></li>}
                            {props.isAuth &&
                            <li className="nav-item">
                                <button className={'btn btn-outline-success mr-2'} onClick={() => setOpened(true)}>
                                    Cart <span class="badge badge-light">{count}</span>
                                    <span class="sr-only">unread messages</span>
                                </button>
                            </li>}
                            {props.isAuth &&
                            <li className="nav-item">
                                <button className={'btn btn-outline-primary '} onClick={props.logOut}>Log Out
                                </button>
                            </li>}
                        </ul>
                    </div>
                </div>

                <ReactModal isOpen={opened} onRequestClose={setOpened}
                            className={header.modal}
                            overlayClassName={header.modal_overlay}>
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Your card is:</h5>
                            <button type="button" onClick={() => setOpened(false)} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                props.cart.map(p =>
                                    <div className="row">
                                        <div className="col-4"><img className={'img-thumbnail'} src={p.image} alt=""/></div>
                                        <div className="col-8">{p.name}</div>
                                    </div>

                                )
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setOpened(false)} data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </ReactModal>

            </div>
        );
}


export default Header;