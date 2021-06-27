import React from 'react'

import './header.css'

const Header = (props) => {
    return(
        <header className="headerC">
            <h1 className="pageTit">Memory Card</h1>
            
            <div className="points">
                <p className="headP"> <strong>Points:</strong>  {props.points}</p>
                <p className="headP"> <strong>Best Score:</strong> {props.bestscore}</p>
            </div>
            
        </header>
    )
}

export default Header