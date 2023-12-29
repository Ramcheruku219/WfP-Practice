import { StyleSheet, Text, View,ScrollView,TouchableOpacity} from "react-native";
import React, { useState } from "react";
import TextIn from "../../TextIn";
import DropdownComponent from "../AddFacility/Cosands/Dropdown";
import IrrigationQuestion from "./IrrigationQuestion";
import styles from './style';
import FilePicker from "./FilePicker";

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

const IrrigationScheme = () => {
  const [sizeOfIrrigation, setSizeOfIrrigation] = useState();
  const [acreage, setAcreage] = useState();
  const [typeOfSystem, setTypeOfSystem] = useState();
  const [typeOfCropIrrigation, setTypeOfCropIrrigation] = useState();
  const [waterSource, setWaterSource] = useState();
  const [numberOfWaterSource, setNumberOfWaterSource] = useState();
  const [permitNumber, setPermitNumber] = useState();

  const [waterSourcePermitted, setWaterSourcePermitted] = useState();
  const [waterSourceUsed, setWaterSourceUsed] = useState();
  const [irrigationWeekPermited, setIrrigationWeekPermited] = useState();
  const [irrigationPerWeek, setIrrigationPerWeek] = useState();
  const [amtwaterAbstractionPermitted, setAmtWaterAbstractionPermitted]=useState();
  const [amtwaterAbstraction, setAmtWaterAbstraction] = useState();

  const [amtPerCropPermitted, setAmtPerCropPermitted] = useState();
  const [amtPerCropAbstracted, setAmtPerCropAbstracted] = useState();
  const [abstractionMethod, setAbstractionMethod] = useState();
  const [noOfCropingSeasons, setNoOfCropingSeasons] = useState();
  const [areaOfEachCrop, setAreaOfEachCrop] = useState();



  
  const handleSubmit = () => {
    console.log('Size Of Irrigation:', sizeOfIrrigation);
    console.log('Acreage:', acreage);
    console.log('Type Of System:', typeOfSystem);
    console.log('Type Of Crop Irrigation:', typeOfCropIrrigation);
    console.log('Water Source:', waterSource);
    console.log('Number Of Water Source:', numberOfWaterSource);
    console.log('Permit Number:', permitNumber);
    console.log('Water Source Permitted:', waterSourcePermitted);
    console.log('Water Source Used:', waterSourceUsed);
    console.log('No Of Irrigation Week Permited:', irrigationWeekPermited);
    console.log('No Of Irrigation Per Week:', irrigationPerWeek);
    console.log('Amt Of Water Abstraction Permitted:', amtwaterAbstractionPermitted);
    console.log('Amt Of Water Abstraction:', amtwaterAbstraction);
    console.log('Amt Per Day Crop Permitted:', amtPerCropPermitted);
    console.log('Amt Per Day Crop Abstracted:', amtPerCropAbstracted);
    console.log('Abstraction Method:', abstractionMethod);
    console.log('No Of Croping Seasons:', noOfCropingSeasons);
    console.log('Area Of Each Crop:', areaOfEachCrop);

    // You can add your Axios or fetch logic here to submit the data to the server
  };
  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps="always">
      <View style={styles.Container}>
        <Text style={styles.tabHead}>
          1.Irrigation Scheme Facility Information
        </Text>

        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setSizeOfIrrigation(item.value);
          }}
          valueofvalue={sizeOfIrrigation}
          placeholder="Size Of Irrigation"
        />

        <TextIn 
        label="Acreage"
         myvalue={setAcreage}
          value={acreage}
           />
        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setTypeOfSystem(item.value);
          }}
          valueofvalue={typeOfSystem}
          placeholder="Type Of System"
        />

        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setTypeOfCropIrrigation(item.value);
          }}
          valueofvalue={typeOfCropIrrigation}
          placeholder="Type Of Crop Irrigation"
        />

        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setWaterSource(item.value);
          }}
          valueofvalue={waterSource}
          placeholder="Water Source"
        />

        <TextIn
          label="Number Of Water Source"
          myvalue={setNumberOfWaterSource}
          value={numberOfWaterSource}
        />

        <Text style={styles.tabHead}>
          2.Water Usese and Abstraction Information
        </Text>

        <TextIn
          label="Permit Number"
          myvalue={setPermitNumber}
          value={permitNumber}
        />

       
        <FilePicker title='Attach Permit Documents'/>

        <TextIn
          label="Volume Of WaterSourcePermitted(mt3)"
          myvalue={setWaterSourcePermitted}
          value={waterSourcePermitted}
        />
           <TextIn
          label="Volume Of WaterSource Used(mt3)"
          myvalue={setWaterSourceUsed}
          value={waterSourceUsed}
        />
        <TextIn
          label="No Of Irrigation Week Permited"
          myvalue={setIrrigationWeekPermited}
          value={irrigationWeekPermited}
        />
          <TextIn
          label="No Of Irrigation Per Week"
          myvalue={ setIrrigationPerWeek}
          value={irrigationPerWeek}
        />
        <TextIn
          label="Amt Of Water Abstraction Permitted(mt3)"
          myvalue={setAmtWaterAbstractionPermitted}
          value={amtwaterAbstractionPermitted}
        />
        <TextIn
          label="Amt Of Water Abstraction(mt3)"
          myvalue={setAmtWaterAbstraction}
          value={amtwaterAbstraction}
        />
     
      
        <TextIn
          label="Amt Per Day Crop Permitted"
          myvalue={setAmtPerCropPermitted}
          value={amtPerCropPermitted}
        />
        
        <TextIn
          label="Amt Per Day Crop Abstracted"
          myvalue={setAmtPerCropAbstracted}
          value={amtPerCropAbstracted}
        />
 <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setAbstractionMethod(item.value);
          }}
          valueofvalue={abstractionMethod}
          placeholder="Abstraction Method"
        />
          <TextIn
          label="No Of Croping Seasons"
          myvalue={setNoOfCropingSeasons}
          value={noOfCropingSeasons}
        />

<TextIn
          label="Area Of Each Crop(mt2)"
          myvalue={setAreaOfEachCrop}
          value={areaOfEachCrop}
        />
<IrrigationQuestion/>
<TouchableOpacity 
  style={styles.Submitbutton}
  onPress={handleSubmit}>
 <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      
      </TouchableOpacity>


        <Text></Text>
    

      </View>
    </ScrollView>
  );
};
export default IrrigationScheme;

// 