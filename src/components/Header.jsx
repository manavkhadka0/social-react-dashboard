import React, { useState } from 'react'
import "../css/header.css"
import { DragSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'

function Header() {
    const [dragChecked, setDragChecked] = useState(false)
    return (
        <div className="header">
            <div className="left">
                <h2>Social Media Dashboard</h2>
                <p>Total Followers: 23,004</p>
            </div>
            <div className="right">
                <p>Dark Mode</p>
                <DragSwitch offColor='rgb(200,0,0)' checked={dragChecked} onChange={(e) => {
                    setDragChecked(e)
                }} />
                {/* Toggle Switch */}
            </div>
        </div>
    )
}

export default Header
