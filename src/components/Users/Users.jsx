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
    <div>
        {
            pages.map( p =>
            <a href="#" onClick={()=>{props.onPageChanged(p);}} className={ props.currentPage === p ? styles.selected : ''}>{p}</a>
        )}
    </div>
    {

        props.users.map(u =>

            <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img  src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={ () => { props.unfollow(u.id)} }>Unfollow</button> :
                                <button onClick={ () => { props.follow(u.id)} }>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>
        )
    }
</div>

};

export default Users;