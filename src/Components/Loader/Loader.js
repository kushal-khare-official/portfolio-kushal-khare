import React from 'react'

import './Loader.css'
import logo from '../../images/logo512.png'

const Loader = () => {
    return (
        <div className="wrapper">
            <div className="loader">
                <img src={logo} alt="Loader" height="50px" width="50px"/>
            </div>
        </div>
    )
}

export default Loader