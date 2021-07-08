
//imports de React
import React from 'react';
import ReactDom from 'react-dom';

//imports de styles

import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

//Imports de components
// import Badge from './component/Badge';
import App from './component/App';


    

const container = document.getElementById('app');

//const name = 'Mario'
//const sum = () => 3+3 ;

//const jsx = <h1>Hola soy, { sum ()}</h1>

//ReactDom.render (__que,__donde)


 ReactDom.render (//<Badge
                    // firstName="Mario" 
                    // lastName="Fuentes"
                    // avatarUrl="https://s.gravatar.com/avatar/e2c9ace63e1850a8eb805469a3ddabf0?s=80"
                    // jobTitle="Practicante Front End"
                    // twitter="Mariofuentezz"
                    // jobOffice="HitchIntegradores"
                    // />
                    <App/>
                    ,container);

