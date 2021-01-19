import React from 'react'
import { Link } from 'react-router-dom'
import './UserCard.css'

const UserCard = ({login, id,avatar_url}) => {
    return (
        <div key={id}  className="user col-lg-3 col-md-4 col-sm-6 col-xs-8 m-3"> 
            <div className="user-card">
                 <img src={avatar_url} alt="user_profil" className="card-image"/>
            <div className="card-content">
                <h1 className="card-header">{login}</h1>
                <Link to={{ pathname : `/users/${login}/repo`, data : {login}}} style={{textDecoration: 'none'}}>
                    <button className="card-btn"> repositories <span> &rarr;</span></button> 
                </Link>
                <Link to={{ pathname : `/users/${login}/orgs`, data : {login}}} style={{textDecoration: 'none'}}>
                    <button className="card-btn"> organisations <span> &rarr;</span></button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default UserCard