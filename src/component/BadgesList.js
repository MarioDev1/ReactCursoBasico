//Imports React
import React from 'react'
import {Link} from 'react-router-dom'

//Imports Componentes
import Gravatar from './Gravatar'
//Imports imagenes y Styles
import './styles/BadgesList.css'



function BadgesList(props) {
   const badges = props.badges
   
   const [query, setQuery] = React.useState('')

   const filteredBadges = badges.filter (badge =>{
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
   })

      if (filteredBadges.length === 0){ 
         return(
            <div>
               <div className="form-group mb-2">
                  <label>Filter Badges</label>
                     <input 
                        type="text" 
                        className="form-control"
                        value={query}
                        onChange={(e) => {
                           setQuery(e.target.value)
                        }}/>
               </div>
               
               <h3>No badges were found </h3>
               <Link className="btn btn-primary" to="/badges/new">
                  Create a new badge
               </Link> 
            </div>
         )
      }
      return (
      <div className="BadgesList">
         <div className="form-group mb-2">
            <label>Filter Badges</label>
               <input 
                  type="text" 
                  className="form-control"
                  value={query}
                  onChange={(e) => {
                     setQuery(e.target.value)
                  }}  />
      </div>

         <ul className="list-unstyled">
            {filteredBadges.map((badge)=>{
               return(
                  <li key={badge.id} className="BadgesListItem">
                  <Link className="text-reset text-decoration-none" 
                     to = {`/badges/${badge.id}`}>
                     <Gravatar  
                              className="BadgesListItem__avatar"
                              email={badge.email}
                              alt="Avatar"/>
                     <div>
                        <div>
                           <strong>{badge.firstName} {badge.lastName}</strong>
                        </div>
                              <div className="Twitter__name">
                                 <span className="Twitter__logo"></span>@{badge.twitter}
                              </div>
                           <div>{badge.jobTitle}</div>
                        </div>
                  </Link>
                  </li>
               )
            })}
         </ul>
      </div>
      )
   }


export default BadgesList