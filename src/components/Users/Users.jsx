import React from 'react';
import userPhoto from '../../assets/images/avatar2.png';
import styles from './Users.module.css';
import {NavLink} from "react-router-dom";

let Users = (props) => {
    //debugger;
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    //debugger;
    let pages = [];

    for (let i = 1; i <= pagesCount; i++ ) {
        pages.push(i)
    }

return <div>
    <ul className="pagination">
        {
            pages.map( p =>
                <li className={ props.currentPage === p ? 'page-item active' : 'page-item'}>
                    <a href="#" onClick={()=>{props.onPageChanged(p);}} className={'page-link'}>{p}</a>
                </li>
        )}
    </ul>
    {

        props.users.map(u =>

            <div key={u.id} className="card">
                <div className="row">
                    <div className="col-4">
                        <NavLink to={'/profile/' + u.id}>
                            <img className="img-thumbnail" src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>

                    <div className="col-12">
                        {
                            u.followed ?
                                <button className="btn btn-danger" onClick={ () => { props.unfollow(u.id)} }>Unfollow</button> :
                                <button className="btn btn-success" onClick={ () => { props.follow(u.id)} }>Follow</button>
                        }
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>
            </div>
        )
    }
</div>

};

export default Users;