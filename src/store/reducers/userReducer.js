

let init = { 
   allUsers: [] 
} 


const userReducer = (state = init, action) => { 
   switch (action.type) { 
      case 'ADD_USER': 
         state.allUsers.push(action.payload) 
         return { 
            ...state 
         } 
      case 'DELETE_USER': 
         const extractedUserList = state.allUsers.filter((user) => user.id != action.payload)
         state.allUsers.length = 0
         const output = Object.assign(state.allUsers, extractedUserList) 
         state.allUsers = output
         return { 
            ...state 
         } 
      default: 
         return state 
   } 
} 

export default userReducer; 