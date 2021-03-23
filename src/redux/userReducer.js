// Initial State
const initialState = {
    username: '',
    isLoggedIn: false
}

// Action Types
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function loginUser(usernameStr) {
    return {
        type: LOGIN_USER,
        payload: usernameStr
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
    }
}

// Reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state, 
                username: action.payload,
                isLoggedIn: true
            }
        case LOGOUT_USER:
            return initialState
        default: return state
    }
}