
//imports de React
import React from 'react'
//Import API
import api from '../api'
//Imports de componentes

import Badge from '../component/Badge'
import BadgeForm from '../component/BadgeForm'
import PageLoading from '../component/PageLoading'
//imports de imagenes

import header from '../images/badge-header.svg'

//imports de Styles

import './styles/BadgeNew.css';

class BadgeNew extends React.Component {

    state = { 
        loading: false,
        error: null,
        form: {
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:'', 
        } 
    };

    handleSubmit = async e => {
        e.preventDefault()
        this.setState( { loading: true , error : null })

        try{
            await api.badges.create(this.state.form)
            this.setState( { loading: true })

            this.props.history.push('/badges')
        }catch (error){
            this.setState( { loading:false , error :error })
        }
    }

    handleChange= e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })

    }


    render() {
        if(this.state.loading){
            return <PageLoading />
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img
                        className="img-fluid" 
                        src={header}
                        alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <Badge 
                            firstName={this.state.form.firstName || 'First-Name'}
                            lastName={this.state.form.lastName   || 'last-Name'}
                            avatarUrl="https://s.gravatar.com/avatar/e2c9ace63e1850a8eb805469a3ddabf0?s=80"
                            jobTitle={this.state.form.jobTitle   || 'Job-Title'}
                            email={this.state.form.email         || 'Email'}
                            twitter={this.state.form.twitter     || 'Twitter'}
                            jobOffice="Hitch Integradores"
                        />
                        </div>
                            <div className="col-6">
                            <h1>New Attendant</h1>
                                <BadgeForm 
                                    onChange={this.handleChange}
                                    onSubmit = {this.handleSubmit}
                                    formValues={this.state.form}
                                    error ={this.state.error}
                                    />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew