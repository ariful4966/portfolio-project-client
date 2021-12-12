import {
  GET_AUTH_INPUT,
  GET_COOKIE_USER,
  GET_PROFILE_INPUT,
  LOGIN_USER,
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
  profile: {
    name: "",
    email: "",
    phone: "",
    title: "",
    bio: "",
    address: {
      village: "",
      upozila: "",
      division: "",
      country: "",
    },
    links: {
      web_url: "",
      git_url: "",
      fb_url: "",
      ld_url: "",
    },
  },
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

    case GET_PROFILE_INPUT:
      // const pro = action.e;
      console.log(action);
      // const newProfile = {
      //   ...state.profile
      // }
      // newProfile[pro.target.name]=pro.target.value;

      // return {...state, profile: newProfile}
      return state;
    default:
      return state;
  }
};

export default reducsers;
