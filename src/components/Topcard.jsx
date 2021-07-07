import React from 'react'
import "../css/topcard.css"

function Topcard(props) {
    return (
        <div className="topcard">
            <div className="top"></div>
            <div className="card">
                <div className="cardtop">
                    <img src="/images/icon-facebook.svg" />
                    <p>{props.username}</p>
                </div>
                <div className="cardmiddle">
                    <div className="numbers">{props.followers}</div>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Topcard
