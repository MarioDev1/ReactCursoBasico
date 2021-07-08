// Imports React 
import React from 'react'
import {Link} from 'react-router-dom'
//imports imagenes y styles
import confLogo from '../images/badge-header.svg'
import './styles/Home.css'

function Home () {

    return(
        <div className="Home">
            <div className="Home">
                <img className="Home__logo" src={confLogo} alt="Logo" />
                <Link to="/badges" className="btn btn-primary">
                                Get Started
                            </Link>
            </div>
        </div>
    );
}

export default Home