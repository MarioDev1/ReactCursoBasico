//Import REACT
import React from 'react'
//Imports de componentes
import Modal from './Modal'


function DeleteBadgeModal (props){
        return <Modal
                    isOpen={props.isOpen}
                    onClose={props.onClose}
                    >
                    <div className="DeleteBadgeModal">
                        <h1> Are You Sure?</h1>
                        <p>You are about to delete this badge.</p>

                        <div>
                            
                            <button 
                                onClick={props.OnDeleteBadge}
                                className="btn btn-danger mr-4">
                                    Delete
                            </button>
                            
                            <button 
                                onClick={props.onClose}
                                className="btn btn-primary mr-4">
                                    Cancel
                            </button>
                        </div>

                    </div>


                </Modal>
}

export default DeleteBadgeModal