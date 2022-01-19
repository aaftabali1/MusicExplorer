import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator, Text } from "react-native";
import colors from '../Constants/colors'
import strings from "../Constants/strings";

const Loader = (props) => {
  const { loading } = props;

  return (
    <Modal
      transparent
      animationType="none"
      visible={loading}
      onRequestClose={() => {
        console.log("close modal");
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading}
            color={colors.black}
            size="large"
          />
          <Text style={styles.text}>{strings.pleaseWait}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: colors.loader,
  },
  activityIndicatorWrapper: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    opacity: 0.4,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    marginTop: 5,
    color: colors.black,
    fontSize: 18,
    fontWeight:'bold'
  },
});

export { Loader };
