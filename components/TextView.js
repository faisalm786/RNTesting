import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { Text, View } from "react-native";
import colors from "util/colors";
const TextView = (props) => {
  return (
    <View style={[styles.textContainer, props.containerStyle]}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

export default TextView;

const styles = ScaledSheet.create({
  textContainer: {
    borderColor: colors.primary,
    borderWidth: 1,
    width: "100%",
    paddingVertical: 9.5,
    alignItems: "center",
    borderRadius: 3,
  },
  text: {
    color: colors.primary,
    fontFamily: "Poppins-Bold",
    fontSize: "12@ms",
  },
});
