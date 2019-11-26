import React from 'react'

function Course(props) {
    return (
        <div id="education">
            <div id="course-image">
                <img src={require("../../img/" + props.image)} alt={props.name}/>
            </div>
            <div id="course-info">
                <h3>{props.school}</h3>
                <p>{props.studyField}</p>
            </div>
        </div>
    )
}

export default Course