// import axios from 'axios'


const initialState = {
    username: '',
    profile: ``,
    userId: 0,
    isLoggedIn: false
}
const LOGOUT_USER = 'LOGOUT_USER'
const REGISTER_USER = 'REGISTER_USER'
const MAKE_USER = 'MAKE_USER'
const UPDATE_USER = 'UPDATE_USER'

// needs to not be user. not sure what it does need to be tho

export function updateUser(userObj){
    return{
        type: UPDATE_USER,
        payload: userObj
    }
}

export function registerUser(username) {
    return {
        type: REGISTER_USER,
        payload: username
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER, 
        payload: initialState
    }
}

export function makeUser(id, username, profile_pic) {
    // //axios call to make new user goes here? make sure to destructure id,username,profile_pic.then(res => res.data)
    return {
        type: MAKE_USER,
        payload: {
            id,
            username,
            profile_pic
        }
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, ...action.payload }
        case UPDATE_USER:
            return{...state, ...action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        case MAKE_USER:
            return { ...state, username: action.payload.id.username, profile: action.payload.id.profile_pic, userId: action.payload.id.id} 
        default:
            return initialState
    }
}