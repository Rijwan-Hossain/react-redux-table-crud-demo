import React from 'react'; 
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { deleteUser } from '../../store/actions/userAction'

function Details() { 
   let {id} = useParams(); 
   const history = useHistory() 
   const dispatch = useDispatch() 
   const users = useSelector(state => state.users)
   const user = users.allUsers.find(user => user.id == id)

   const deleteHandler = (e) => { 
      e.preventDefault(); 
      dispatch(deleteUser(id)) 
      history.push('/'); 
   } 
   
   return ( 
      <div> 
         <button onClick={() => history.push('/')}> 
            Back 
         </button> 
         <button onClick={deleteHandler}> 
            Delete
         </button>  

         <div className="mt-5">
            <p>Name: { user.name } </p>
            <p>Email: { user.email } </p>
            <p>Age: {user.age} </p>
            <p>Gender: {user.gender} </p>
            <p>Phone Number: {user.phone}</p>
         </div>
      </div> 
   ) 
} 

export default Details; 
