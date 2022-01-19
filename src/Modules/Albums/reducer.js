import {API_FAILED, API_REQUEST, API_SUCCESS, ON_SELECT_ALBUM} from './action';

const initialState = {
  isLoading: false,
  error: null,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case API_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case API_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case ON_SELECT_ALBUM:
      return{
        ...state,
        data: action.data
      }

    default:
      return state;
  }
};

