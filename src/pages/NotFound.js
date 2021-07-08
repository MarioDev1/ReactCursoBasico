import React from 'react'
import {Link} from 'react-router-dom'

//imports imagenes y styles 
import './styles/NotFound.css'
import NotFoundLogo from '../images/NotFoundLogo.svg'


function NotFound () {
    return (<div className="NotFound">
                    <div className="NotFound__container">
                        <img src={NotFoundLogo} alt="logo" />
                        <div className="container-fluid">
                            <Link to="/badges/new" className="btn btn-primary">
                                New Badge
                            </Link>
                        </div>
                    </div>
                           
        </div>); 
}

export default NotFound