//Imports React
import React from 'react'

//Imports Imagenes y Styles
import './styles/PageError.css'

import Errorlogo from '../images/503Error.svg'
import { Link } from 'react-router-dom'

function PageError (props){
    return (
        <div>
        <img className="Page__logo" src={Errorlogo} alt="503Error" />
        <div className="container-fluid">
            <Link to = "/"> Return to the HomePage....</Link>
        </div>
       </div>
       
    )
}

export default PageError