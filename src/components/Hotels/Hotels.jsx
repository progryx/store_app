//imports
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";


// main function
const Hotels = (props) => {

    const [search, setSearch] = useState(''); // use state hook

    const searchingProceed = e => {
        setSearch(e.target.value); // set input value
        props.getResult(search); // get search result
    };


    return <div className='container'>
        <div className="row">
            <input className="form-control form-control-lg" value={search} onChange={searchingProceed} type="text"
                   placeholder="Search for hotels"/>
        </div>

        {search === '' ? <div className="alert alert-info my-2">Try our best offers!</div> :
            <div className="alert alert-primary my-2">Search results are below</div>}

        <div className='row'>
            {
                props.hotels.map(u =>
                    <div className="col-3 py-2">
                        <div key={u.id} className="card h-100">
                            <NavLink className='card-title' to={'/hotel/' + u.id}><img className="card-img-top"
                                                                                       src={u.image} alt=""/></NavLink>
                            <div className="card-body">
                                <NavLink className='card-title' to={'/hotel/' + u.id}>{u.name}</NavLink>
                                <div className={`pb-3 stars star_` + u.stars}></div>
                                <span className='badge badge-primary'>{u.city}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>


};

export default Hotels;