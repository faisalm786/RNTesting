import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../util/colors";

const CustomText = (props) => {
  return <Text style={[styles.customText, props.textStyle]}>{props.name}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  customText: {
    backgroundColor:colors.black,
    color: colors.white,
    justifyContent:'flex-start',
    alignSelf: "flex-start",
    fontFamily: "montserrat_regular",
    fontSize: 12,
    // lineHeight: 10,
  },
});
