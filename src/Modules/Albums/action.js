export const API_REQUEST = "API_REQUEST";
export const API_SUCCESS = "API_SUCCESS";
export const API_FAILED = "API_FAILED";
export const ON_SELECT_ALBUM = 'ON_SELECT_ALBUM';
export const SAVE_TRACKS = 'SAVE_TRACKS';

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

export const onSelectAlbum = (data) => {
  return {
    type: ON_SELECT_ALBUM,
    data,
  }
}

export const saveTracks = (tracks) => {
  return {
    type: SAVE_TRACKS,
    tracks,
  }
}
