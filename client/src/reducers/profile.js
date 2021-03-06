import {
  GET_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  PROFILE_ERROR
} from "../actions/types";

const initialState = {
  profile: null, // stores logged in user's profile data as well as profiles of other users when visited
  profiles: [], // list of developers, on profile listing page
  repos: [], // github repositories
  loading: true,
  error: {} // for request errors
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  // Handle the action types
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state, // return current state
        profile: payload, // set the profile to the profile data sent back through the payload
        laoding: false // set to false once loading is complete
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload, // any error messages will be in the payload
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      };
    default:
      return state;
  }
}
