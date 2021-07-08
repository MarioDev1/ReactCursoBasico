
//Imports de REACT
import React from 'react'
import {Link} from 'react-router-dom'

//Imports de API 
import api from '../api.js'

//Imports de Componentes
import BadgesList from '../component/BadgesList'
import PageLoading from '../component/PageLoading'
import PageError from '../component/PageError'
import MiniLoader from '../component/MiniLoader'

//Import de imagenes y Styles
import logo_header from '../images/badge-header.svg'
import './styles/Badges.css'

 class Badges extends React.Component {
    state={
       loading: true,
       error: null,
       data: undefined, 
    }

    componentDidMount() {
        this.fetchData();

       this.intervalId = setInterval ( this.fetchData, 5000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    
    fetchData = async () =>{
        this.setState ( { loading: true , error: null } )
        
        try {
            const data =  await api.badges.list();
            this.setState({ loading: false, data:data})
        } catch (error){
            this.setState({ loading:false, error: error })
        }
    }


    render() {
        if (this.state.loading === true && this.state.data === undefined){
            return <PageLoading/>
        }

        if (this.state.error){
            return (
                <PageError error={this.state.error}/>
            )  
        }
        
        return (
            <React.Fragment>
                    <div className="Badges">
                        <div className="Badges__hero">
                            <div className="Badges__container">
                                <img className="Badges_conf-logo" src={logo_header} alt="Conf logo" />
                            </div>
                        </div>
                    </div>

                    <div className="Badges__container">
                        <div className="Badges__buttons">
                            <Link to="/badges/new" className="btn btn-primary">
                                New Badge
                            </Link>
                        </div>

                        <div className="Badges__list">
                            <div className="Badges__container">
                                <BadgesList badges={this.state.data}/>
                                {this.state.loading === true && <MiniLoader /> } 
                            </div>
                        </div>
                       
                    </div>
            </React.Fragment>
        )
    }
}
export default Badges