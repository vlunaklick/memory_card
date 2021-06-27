import React from 'react'

import './pictures.css'

const PicturesT = (props) => {
    return(
        <div onClick={()=> props.handleClick(props.id)} className="marcoCar">
            <div className="marcoPic">
                <img className="picIn" src={props.src} alt="" />
            </div>
            <h4>{props.name}</h4>

        </div>
    )
}

export default PicturesT