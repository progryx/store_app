import React from 'react';
import * as axios from 'axios'; // импортируй все что там экспортируется, под общим названием (as) - axios
import userPhoto from '../../assets/images/avatar2.png';
let Users = (props) => {

    if (props.users.length === 0) {
      //  debugger;
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
          //  debugger;
           props.setUsers(response.data.items);
        });

        // props.setUsers([
        //     {id: 1, photoUrl: 'https://cs8.pikabu.ru/avatars/2737/v2737573-1578567675.png', followed: true, fullName: 'Daenerys', status: 'I am cool', location: {city: 'Kings Landing', country: 'Vesteros'}},
        //     {id: 2, photoUrl: 'https://cs8.pikabu.ru/avatars/933/v933333-2130718137.png', followed: true, fullName: 'Max', status: 'I am bad', location: {city: 'Moscow', country: 'Russia'}},
        //     {id: 3, photoUrl: 'https://cs8.pikabu.ru/avatars/1757/v1757641-107825703.png', followed: true, fullName: 'Vasya', status: 'I am bro', location: {city: 'Kazan', country: 'Russia'}},
        //     {id: 4, photoUrl: 'https://cs8.pikabu.ru/avatars/2495/v2495311-1537928548.png', followed: false, fullName: 'Lesha', status: 'Go go power rangers', location: {city: 'Moscow', country: 'Russia'}}
        // ]);
    }

    return <div>
        {

            props.users.map(u =>

                <div key={u.id}>
                <span>
                    <div><img  src={u.photoUrl != null ? u.photos.small : userPhoto} alt=""/></div>
                    <div>
                        {
                            u.followed ?
                            <button onClick={ () => { props.unfollow(u.id)} }>Unfollow</button> :
                            <button onClick={ () => {props.follow(u.id)} }>Follow</button>
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
}

export default Users;