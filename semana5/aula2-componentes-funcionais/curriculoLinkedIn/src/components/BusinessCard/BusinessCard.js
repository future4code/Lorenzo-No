import React from 'react'
import photo from '../../img/profilePicture.jpg'
import './BusinessCard.css'

function BusinessCard(props) {
    return (
        <section className="business-card">
            <div id="profile-picture">
                <img src={photo} alt={props.name}/>
            </div>
            <div id="about-me">
                <h1>{props.name}</h1>
                <br/>
                <p>{props.title}</p>
                <br/>
                <p>{props.location}</p>
            </div>
        </section>
    )
}

export default BusinessCard