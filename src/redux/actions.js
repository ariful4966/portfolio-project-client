export const LOGIN_USER = "LOGIN_USER";

export const getUserLogin = (data) => {
  return { type: LOGIN_USER, data };
};

// Get User Input for Signup

export const GET_AUTH_INPUT = "GET_AUTH_INPUT";

export const getAuthInput = (e) => {
  return { type: GET_AUTH_INPUT, e };
};

// Get Cookie info
export const GET_COOKIE_USER = "GET_COOKIE_USER";

export const getCookieUser = (user) => {
  return { type: GET_COOKIE_USER, user };
};

// Get Profile Input for create profile
export const GET_PROFILE_INPUT = "GET_PROFILE_INPUT";

export const getProfileInput = (e) => {
  return { type: GET_PROFILE_INPUT, e };
};

// Get All User INformation

export const All_USER_INFORMATION = "All_USER_INFORMATION";

export const allUserInformation = (usersData) => {
  return { type: All_USER_INFORMATION, usersData };
};

// Get Database User info

export const SINGLE_USER_INFO = "SINGLE_USER_INFO";

export const singleUserInfo = (singleUser) => {
  return { type: SINGLE_USER_INFO, singleUser };
};

// Profile Information
export const USER_PROFILE_INFO = "USER_PROFILE_INFO";
export const userProfileInfo = (profile) => {
  return { type: USER_PROFILE_INFO, profile };
};

// Web application post
export const WEBSITE_DATA = "WEBSITE_DATA";

export const websiteData = (web) => {
  return { type: WEBSITE_DATA, web };
};

// Blog Posts
export const BLOG_POST_DATA = "BLOG_POST_DATA";
export const blogPostData = (blog) => {
  return { type: BLOG_POST_DATA, blog };
};

// Mobile post

export const MOBILE_DATA = "MOBILE_DATA";
export const mobileData = (mobile) => {
  return { type: MOBILE_DATA, mobile };
};
