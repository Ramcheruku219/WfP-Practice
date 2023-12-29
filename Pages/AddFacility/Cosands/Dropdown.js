import React from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const DropdownComponent = (props) => {
  const {
    data,
    valueofvalue,
    onchangevalue,
    disablevalue,
    dropdownstyle,
    placeholder,
  } = props;

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, dropdownstyle]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        mode={"modal"}
        backgroundColor={"rgba(54, 69, 79, 0.5)"}
        autoScroll={false}
        containerStyle={styles.viewStyle}
        search={true}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={valueofvalue}
        onChange={onchangevalue}
        disable={disablevalue}
        renderLeftIcon={() => (
          <AntDesign
           style={styles.icon} 
           color="black"
            name="Safety"
             size={20}
              />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 6,
    width: "103%",
    alignSelf: "center",
    flexDirection: "column",
    // borderBottomWidth:0.5,
    
  },
  dropdown: {
    height: 50,
    borderWidth:1,
    borderColor: "gray",
    padding: 7,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    opacity:0.5
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "black", // Customize placeholder text color

  },

  selectedTextStyle: {
    fontSize: 16,
    color: "black", // Customize selected text color
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
   
    height: 40,
    fontSize: 16,
    backgroundColor: "#fff", // Customize search input background color
    borderBottomWidth: 1,
    borderBottomColor: "#ccc", // Customize search input border color
  },
  viewStyle: {
    backgroundColor: "#f0f6f8", // Customize dropdown container background color
  },
});

export default DropdownComponent;
