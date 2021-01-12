

export const addNewUser = (data) => dispatch => { 
   dispatch({ 
      type: 'ADD_USER', 
      payload: data 
   }) 
} 


export const deleteUser = (id) => dispatch => { 
   dispatch({ 
      type: 'DELETE_USER', 
      payload: id 
   }) 
} 


export const getUser = (id) => dispatch => { 
   dispatch({ 
      type: 'GET_USER', 
      payload: id 
   }) 
} 




