
//imports de REACT
import React from 'react'
import {Link} from 'react-router-dom'

// import ReactDOM from 'react-dom'

//Imports de componentes
import Badge from '../component/Badge'
import DeleteBadgeModal from '../component/DeleteBadgeModal'

//Imports de imagenes y Styles 
import conlogo from '../images/badge-header.svg'
import './styles/BadgeDetails.css'






function BadgeDetails (props) {
    const badge= props.badge
    const jobOffice = 'Hitch Integradores'

    return (
        <div>
        <div className=" BadgeDetails__hero -attendant-name">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={conlogo} alt="Logo de la conferencia" />
                    </div>
                    <div className="col-6">
                        <h1>
                            {badge.firstName} {badge.lasName} 
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Badge  
                        firstName={badge.firstName}
                        lastName={badge.lastName}
                        email={badge.email}
                        twitter={badge.twitter}
                        jobTitle={badge.jobTitle}
                        jobOffice={jobOffice}
                        />
                </div>
                <div className="col">
                    <h2>Actions</h2>
                    <div>
                        
                        <div>
                            <Link 
                                className="btn btn-primary mb-2" 
                                to={`/badges/${badge.id}/Edit`}>
                                Edit
                                </Link>
                        </div>
                        <div>
                            <button 
                                onClick= {props.onOpenModal}
                                className="btn btn-danger">
                                Delete
                                </button>
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onCloseModal}
                                    OnDeleteBadge={props.onDeleteBadge}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}



export default BadgeDetails;