import axios from 'axios'

const initialState = {
    // user:{
    //     username: '',
    //     profile: '',
    //     userId:0  
    // },
    username: '',
    profile: '',
    userId:0,
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER'


// needs to not be user. not sure what it does need to be tho
export function loginUser(user){
    return{
        type: LOGIN_USER,
        payload: user
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.payload}
    }
}