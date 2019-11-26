import React from 'react'

function ContactInfo(props) {
    return (
        <div id="contact-info">
            <p>Email: <a href={"mailto:" + props.email}>{props.email}</a></p>
            <br/>
            <p>LinkedIn: <a href={"https://" + props.profile}>{props.profile}</a></p>
        </div>
    )
}

export default ContactInfo