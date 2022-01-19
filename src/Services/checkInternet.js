import NetInfo from "@react-native-community/netinfo";
import { singleBtnAlert, Messages } from "./alert";
export default function isNetworkAvailable() {
  return NetInfo.fetch()
    .then((value) => {
      if (value.isConnected) {
        return true;
      }
      /* Showing Alert when connection failed */
      singleBtnAlert({ message: Messages.noConnection });
      return false;
    })
    .catch((error) => {
      throw error;
    });
}
