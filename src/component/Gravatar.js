//Imports de React
import React from 'react'
import md5 from 'md5' //esta libreria nose si es de REACT 

function Gravatar (props) {
    const email = props.email;
    const hash = md5(email);

    return(
        <img className={props.className}
                src={'https://s.gravatar.com/avatar/'||`${hash}`||'?s=80'} //arreglar el Hash 
                alt="Avatar" />
    )
} 

export default Gravatar



