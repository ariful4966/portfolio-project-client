import {
  BLOG_POST_DATA,
  GET_AUTH_INPUT,
  GET_COOKIE_USER, LOGIN_USER, MOBILE_DATA, USER_PROFILE_INFO,
  WEBSITE_DATA
} from "./actions";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
    isLogin: false,
  },
  web: [],
  mobile: [],
  blog: [],
  
  profile:{}
};

const reducsers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return state;

    case GET_AUTH_INPUT:
      const event = action.e;
      const newUser = { ...state.user };
      newUser[event.target.name] = event.target.value;
      return { ...state, user: newUser };

    case GET_COOKIE_USER:
      const user = action.user;

      const tokenUser = {
        ...state.user,
        name: user.name,
        email: user.email,
        password: "",
        isLogin: true,
      };
      return { ...state, user: tokenUser };
      case USER_PROFILE_INFO:
        const profiles = action.profile.data;
        return {...state, profiles: profiles};

      case WEBSITE_DATA:
        const web = action.web.data;
        return {...state, web: web};

        case BLOG_POST_DATA:
          const blog = action.blog.data;
          return {...state, blog: blog};

          case MOBILE_DATA: 
          const mobile = action.mobile.data;
          return {...state, mobile: mobile};
    
    default:
      return state;
  }
};

export default reducsers;
