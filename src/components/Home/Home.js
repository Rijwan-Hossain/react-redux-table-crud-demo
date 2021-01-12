import React from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'; 

import './home.css'

function Home() {
   const history = useHistory();
   const users = useSelector(state => state.users) 

   return (
      <div> 
         <button type="button" onClick={() => history.push('/create')}>
            Create
         </button> 

         <h3>User List</h3> 
         <table> 
            <tr> 
               <th>Name</th> 
               <th>Email</th> 
               <th>Phone</th> 
            </tr> 
            {
               users.allUsers.map((user, i) => { 
                  return ( 
                     <tr key={i} onClick={() => history.push(`/${user.id}`)}> 
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                     </tr> 
                  ) 
               }) 
            } 
         </table> 
         

         
         <h4>Pagination</h4>
      </div> 
   )
}

export default Home
