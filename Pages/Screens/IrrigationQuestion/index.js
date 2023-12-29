import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextIn from "../../../TextIn";
import DropdownComponent from "../../AddFacility/Cosands/Dropdown";
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
const IrrigationQuestion = () => {
  const [isYesClicked, setIsYesClicked] = useState(null);
  const [typeOfMeasurmentDevices, setTypeOfMeasurmentDevices] = useState();
  const [recordsOfMeasurment, setMecordsOfMeasurment] = useState();
  const [averageFigure, setAverageFigure] = useState();
  const [otherUses, setOtherUsers] = useState();
  const [volumeOfOtherUse, setVolumeOfOtherUse] = useState();
  const [specifyOthers, setSpecifyOthers] = useState();

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
              <Text style={{}}>
                Presence Flower Measurment Devices ?
              </Text>
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
              setTypeOfMeasurmentDevices(item.value);
            }}
            valueofvalue={typeOfMeasurmentDevices}
            placeholder="Type Of Measurment Devices"
          />

          <TextIn
            label="Records Of Measurment"
            myvalue={setMecordsOfMeasurment}
            value={recordsOfMeasurment}
          />

          <TextIn
            label="Average Figure(per plot per day)"
            myvalue={setAverageFigure}
            value={averageFigure}
          />

          <DropdownComponent
            data={data}
            onchangevalue={(item) => {
              setOtherUsers(item.value);
            }}
            valueofvalue={otherUses}
            placeholder="Other Users"
          />

          <TextIn
            label="Volume Other Use(mt3)"
            myvalue={setVolumeOfOtherUse}
            value={volumeOfOtherUse}
          />
          <TextIn
            label="Specifiy Other"
            myvalue={setSpecifyOthers}
            value={specifyOthers}
          />

          {/* Add more fields for Yes condition if needed */}
        </View>
      ) : isYesClicked === "No" ? (
        <View>
          {/* <TextIn
           label="Remark" 
           myvalue={setRemark}
            value={remark}
             /> */}
          {/* Add more fields for No condition if needed */}
        </View>
      ) : null}
    </View>
  );
};

export default IrrigationQuestion;
