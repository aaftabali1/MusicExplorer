import axios from "axios";
import isNetworkAvailable from "./checkInternet";

/* User Api Key */
export const apiKey = "NzhhZWJlNDUtOTY3Zi00MWEyLThhYWMtMjcyYjVkMTY1Yjk0";

const url = `http://api.napster.com/v2.2/albums/top?apikey=${apiKey}&limit=20&offset=`

/* Posting Webservice Here */
export const getAPI = async (offset) => {
  /* Checking for Internet connection */
  const connection = await isNetworkAvailable();
  /* If successfully connected */
  if (connection) {
    return axios({
      method: "Get",
      url: url + offset,
      timeout: 1000 * 60, //Time out of 60 Sec
    });
  } else {
    /* throw error for No internet connection */
    throw new Error("No Internet Connection");
  }
};