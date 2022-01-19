export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_FAILED = "API_FAILED";

export const apiRequest = () => {
  return {
    type: API_REQUEST,
  };
};

export const apiSuccess = () => {
  return {
    type: API_SUCCESS,
  };
};

export const apiFailed = (error) => {
  return {
    type: API_FAILED,
    error,
  };
};
