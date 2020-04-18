import axios from 'axios'

const initialState = {
    // user:{
    //     username: '',
    //     profile: '',
    //     userId:0  
    // },
    username: '',
    profile: 'https://images.designtrends.com/wp-content/uploads/2015/12/02061350/Neon-Backgrounds.jpg',
    userId: 0,
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER'
const MAKE_USER = 'MAKE_USER'

// needs to not be user. not sure what it does need to be tho
export function loginUser(username) {
    return {
        type: LOGIN_USER,
        payload: username
    }
}

export function makeUser(id, username, profile_pic) {
    // //axios call to make new user goes here? make sure to destructure id,username,profile_pic.then(res => res.data)
    // return {
    //     type: MAKE_USER,
    //     payload: data
    // }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, username: action.payload }
        case MAKE_USER:
            return { ...state, username: action.data.username, profile: action.data.profile, userId: action.data.userId }
        default:
            return initialState
    }
}