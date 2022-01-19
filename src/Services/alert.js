import { Alert } from "react-native";

export function singleBtnAlert({
  message,
  button = "OK",
  action,
  type = "cancel",
}) {
  Alert.alert(
    "Music Explorer",
    message,
    [
      {
        text: button,
        onPress: action,
        style: type,
      },
    ],
    { cancelable: false }
  );
}

export function twoBtnAlert({
  message,
  button1 = "OK",
  action1,
  type1 = "cancel",
  button2 = "Cancel",
  action2,
  type2 = "cancel",
}) {
  Alert.alert(
    "Music Explorer",
    message,
    [
      {
        text: button2,
        onPress: action2,
        style: type2,
      },
      {
        text: button1,
        onPress: action1,
        style: type1,
      },
    ],
    { cancelable: false }
  );
}

/* ALERT MESSAGES */

export const Messages = {

  noConnection: "Please check your internet connection and try again.",
  
};
