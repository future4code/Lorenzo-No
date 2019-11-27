import React from 'react'

function Position(props) {
    return (
        <div id="education">
            <div id="position-image">
                <img src={require("../../img/" + props.image)} alt={props.name}/>
            </div>
            <div id="position-info">
                <h3>{props.company}</h3>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Position