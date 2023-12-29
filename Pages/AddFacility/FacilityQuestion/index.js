import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextIn from "../../../TextIn";
import DropdownComponent from "../Cosands/Dropdown";
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
const FacilityQuestion = () => {
  const [isYesClicked, setIsYesClicked] = useState(null);
  const [zone, setZone] = useState();
  const [easting, setEasting] = useState();
  const [northings, setNorthings] = useState();
  const [latitude, setLatitude] = useState();
  const [lonitude, setLonitude] = useState();
  const [deg, setDeg] = useState();
  const[min,setMin]=useState();
  const [sec, setSec] = useState();
  const [select, setSelect] = useState();
  const [degg, setDegg] = useState();
  const[minn,setMinn]=useState();
  const [secc, setSecc] = useState();
  const [selectt, setSelectt] = useState();


 

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
        
              <RadioButton value="UTM" />
              <PaperText>UTM</PaperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="Lat/Long" />
              <PaperText>Lat/Long</PaperText>
            </View>
            <View style={styles.radioButton}>
              <RadioButton value="DMS" />
              <PaperText>DMS</PaperText>
            </View>
          </View>
        </RadioButton.Group>
      </View>

      {/* Conditionally render fields based on yes or no */}
      {isYesClicked === "UTM" ? (
        <View>
          <DropdownComponent
            data={data}
            onchangevalue={(item) => {
                setZone(item.value);
            }}
            valueofvalue={zone}
            placeholder="Select Zone"
          />
          <TextIn
            label="Easting"
            myvalue={setEasting}
            value={easting}
          />
    
          <TextIn
            label="Northings"
            myvalue={ setNorthings}
            value={northings}
          />
        {/* Add more fields for Yes condition if needed */}
        </View>
      ) : isYesClicked === "Lat/Long" ? (
        <View>
          <TextIn
            label="Latitude"
            myvalue={setLatitude}
            value={latitude}
          />
            <TextIn
            label="Longitude"
            myvalue={setLonitude}
            value={lonitude}
          />
          {/* Add more fields for No condition if needed */}
        </View>
      ) 
      : isYesClicked === "DMS" ? (
        <View>
        <TextIn
            label="Deg"
            myvalue={setDeg}
            value={deg}
          />
            <TextIn
            label="Min"
            myvalue={setMin}
            value={min}
          />
            <TextIn
            label="Sec"
            myvalue={setSec}
            value={sec}
          />
            <DropdownComponent
            data={data}
            onchangevalue={(item) => {
                setSelect(item.value);
            }}
            valueofvalue={select}
            placeholder="Select"
          />
           <TextIn
            label="Deg"
            myvalue={setDegg}
            value={degg}
          />
            <TextIn
            label="Min"
            myvalue={setMinn}
            value={minn}
          />
            <TextIn
            label="Sec"
            myvalue={setSecc}
            value={secc}
          />
            <DropdownComponent
            data={data}
            onchangevalue={(item) => {
                setSelectt(item.value);
            }}
            valueofvalue={selectt}
            placeholder="Select"
          />
          {/* Add more fields for No condition if needed */}
        </View>
        ): null}
    </View>
  );
};

export default FacilityQuestion;

