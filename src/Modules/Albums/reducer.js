import {API_FAILED, API_REQUEST, API_SUCCESS} from './action';

const initialState = {
  isLoading: false,
  error: null,
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

    default:
      return state;
  }
};

