import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextIn from "../../TextIn";
import DropdownComponent from "../AddFacility/Cosands/Dropdown";
import { RadioButton, Text as PaperText } from "react-native-paper";
import styles from "./style";
const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
const Question2 = () => {
  const [isYesClicked, setIsYesClicked] = useState(null);
  const [sanitation, setSanitation] = useState();
  const [otherspecify, setOtherspecify] = useState();

  const handleRadioButtonChange = (value) => {
    setIsYesClicked(value);
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <RadioButton.Group
          onValueChange={handleRadioButtonChange}
          value={isYesClicked}
        >
          <View style={styles.radioButtonContainer}>
            <View style={styles.radioButton}>
              <Text style={{ marginRight: 58 }}>Sanitation Of Facility ?</Text>
              <RadioButton value="Yes" />
              <PaperText>Yes</PaperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="No" />
              <PaperText>No</PaperText>
            </View>
          </View>
        </RadioButton.Group>
      </View>

      {/* Conditionally render fields based on yes or no */}
      {isYesClicked === "Yes" ? (
        <View>
          <DropdownComponent
            data={data}
            onchangevalue={(item) => {
              setSanitation(item.value);
            }}
            valueofvalue={sanitation}
            placeholder="Select Sanitation Type"
          />
          <TextIn
            label="Other Specify"
            myvalue={setOtherspecify}
            value={otherspecify}
          />

          {/* Add more fields for Yes condition if needed */}
        </View>
      ) : isYesClicked === "No" ? (
        <View>{/* Add more fields for No condition if needed */}</View>
      ) : null}
    </View>
  );
};

export default Question2;


