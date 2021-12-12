export const LOGIN_USER= "LOGIN_USER";


export const getUserLogin = (data)=> {
    return {type: LOGIN_USER, data}
}



// Get User Input for Signup

export const GET_AUTH_INPUT = "GET_AUTH_INPUT";

export const getAuthInput = (e)=>{
    return {type: GET_AUTH_INPUT, e}
}


// Get Cookie info 
export const GET_COOKIE_USER = "GET_COOKIE_USER";

export const getCookieUser = (user)=>{
    return {type: GET_COOKIE_USER, user}
}

// Get Profile Input for create profile
export const GET_PROFILE_INPUT = "GET_PROFILE_INPUT";

export const getProfileInput = (e)=>{
    return {tupe: GET_PROFILE_INPUT, e}
}