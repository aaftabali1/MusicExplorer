import {apiKey, getAPI, Urls} from '../../Services/API';
import {apiSuccess, apiFailed, apiRequest, saveTracks} from './action';

export function getAlbumData(page, callback) {
  return dispatch => {
    const offset = page * 20;
    /* Making Api Request for getting album details */
    const url = Urls.getAlbums + offset;
    dispatch(apiRequest());
    getAPI(url)
      .then(response => {
        const {albums} = response.data;
        dispatch(apiSuccess());
        /* callback function sending data for real time preview */
        callback(albums);
      })
      .catch(err => {
        dispatch(apiFailed(err.message));
        /* callback function sending null value on failure */
        callback(null);
      });
  };
}

export function getAlbumCover(uri, callback) {
  return dispatch => {
    const url = `${uri}?apikey=${apiKey}`;
    dispatch(apiRequest());
    getAPI(url)
      .then(response => {
        /* callback function sending Image for real time preview */
        const {data} = response;
        callback(data.images[2]);
      })
      .catch(err => {
        dispatch(apiFailed(err.message));
        /* callback function sending null value on failure */
        callback(null);
      });
  };
}

export function getAlbumTracks(uri, artWork,callback) {
  return dispatch => {
    const url = `${uri}?apikey=${apiKey}`;
    getAPI(url)
      .then(response => {
        dispatch(apiSuccess());
        /* callback function sending Tracks for real time preview */
        const {data} = response;
        const {tracks} = data;
        /* Empty track array to insert track data for Audio Player */
        var allTracks = [];
        for (let i = 0; i < tracks.length; i++) {
          const url = tracks[i].previewURL;
          const title = tracks[i].name;
          const artist = tracks[i].artistName;
          const album = tracks[i].albumName;
          const artwork = artWork;
          const duration = tracks[i].playbackSeconds;
          /* Pushing final data to tracks array */
          allTracks.push({url,title,artist,album,artwork,duration});
        }
        /* adding track data to redux */
        dispatch(saveTracks(allTracks));
        callback(true);
      })
      .catch(err => {
        dispatch(apiFailed(err.message));
        /* callback function sending null value on failure */
        callback(null);
      });
  };
}
