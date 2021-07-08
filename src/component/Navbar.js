//Imports de React
import React from 'react'
import {Link} from 'react-router-dom'

//Imports de componentes


//Imports de imagenes

import logo from '../images/logo.svg';


//imports de Styles 

import './styles/Navbar.css'


class Navbar extends React.Component {
    render() {
        return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
              <img
                className="Navbar__brand-logo" 
                src={logo} 
                alt="Logo" />
              <span className="fw-light">Home</span>
              <span className="fw-bold">Conference</span>
          </Link>
        </div>
      </div>
        )
    }
}

export default Navbar