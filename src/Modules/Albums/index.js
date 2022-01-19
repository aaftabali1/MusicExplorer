import { getAPI } from "../../Services/API";
import {apiSuccess,apiFailed,apiRequest} from './action';

export function getAlbumData(page,callback){
    return (dispatch)=> {
        const offset = page * 20
        /* Making Api Request for getting album details */
        dispatch(apiRequest());
        getAPI(offset).then(
            response => {
                const {albums} = response.data;
                dispatch(apiSuccess());
                /* callback function sending data for real time preview */
                callback(albums);
            }
        ).catch(err=> {
            dispatch(apiFailed(err.message));
            /* callback function sending null value on failure */
            callback(null);
        })
    }
}