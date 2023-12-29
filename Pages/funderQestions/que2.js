import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextIn from "../../TextIn";
import DropdownComponent from "../AddFacility/Cosands/Dropdown";
import { RadioButton, Text as PaperText } from "react-native-paper";
import styles from "./style";

const Que2 = () => {
  const [isYesClicked, setIsYesClicked] = useState(null);
  const [remark,setRemark]=useState()
 

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
              <Text style={{marginRight:5  }}>Is Catchment area Protected ?</Text>
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
         
          <TextIn
            label="Remark"
            myvalue={setRemark}
            value={remark}
          />
         
        

          {/* Add more fields for Yes condition if needed */}
        </View>
      ) : isYesClicked === "No" ? (
        <View>
        <TextIn
            label="Remark"
            myvalue={setRemark}
            value={remark}
          />
          {/* Add more fields for No condition if needed */}
        </View>
      ) : null}
    </View>
  );
};

export default Que2;

