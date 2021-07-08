//Imports de React
import React from 'react';

//Imports de Componentes
import Loader from './Loader';

//Imports de Imagenes y Styles

import './styles/PageLoading.css'


function PageLoading(){
    return (
        <h1 className="PageLoading">
            <Loader/>
        </h1>
    )
}

export default PageLoading;