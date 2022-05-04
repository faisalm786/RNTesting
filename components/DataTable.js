import React from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import CustomText from "./CustomText";
import colors from "../util/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { cvToValue, uintCV } from "@stacks/transactions";
const DataTable = (props) => {
  // console.log(props.data[0].value.hex)
  // console.log(`cvToValue ${cvToValue(uintCV(props.data[0].value))}`)
  // console.log(`cvToValue ${cvToValue(uintCV(props.data[0].value.hex), true)}`)

  
  return (
    <>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              props.navigation.navigate("Details", {
                asset_identifier: item.asset_identifier
              })
            }
            style={[styles.tableRow, {
              flexDirection: "row"
            }]}
          >
            <CustomText name={item.asset_identifier} textStyle={{width:'80%', backgroundColor: colors.black}}  />
            <Ionicons name="chevron-forward-sharp" style={styles.icon} />
          </TouchableOpacity>
          
        )}
      />
    </>
  );
};

export default DataTable;

const styles = ScaledSheet.create({
  
  tableRow: {
    flex:1,
    borderBottomWidth: 5,
  },
  icon: {
    margin: "16@ms",
    fontSize: "16@ms",
    color: "white",
  },
});
