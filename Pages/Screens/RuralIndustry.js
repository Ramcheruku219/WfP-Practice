import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import React,{useState}from 'react';
import TextIn from '../../TextIn';
import DropdownComponent from '../AddFacility/Cosands/Dropdown';
// import FilePicker from './FilePicker';
import styles from './style';
import FilePicker from './FilePicker';

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
  
const RuralIndustry = () => {

    const [typeOfIndustry,setTypeOfIndustry ] = useState();
    const[waterSource,setWaterSource]=useState();
    const [peremitNumber, setPeremitNumber] = useState();
    
    const[waterSourcePermitted,setWaterSourcePermitted]=useState();
    const [waterSourceUsed,setWaterSourceUsed] = useState();
    const[drainageWaterPeermitted,setDrainageWaterPeermitted]=useState();
    const [drainageWater, setDrainageWater] = useState();
    const[otherUses,setOtherUses]=useState();
    const[volumeForOtherUse,setvolumeForOtherUse]=useState();
    const [specifyOthers,setSpecifyOthers] = useState();
  

    const handleSubmit = () => {
      console.log('Type Of Industry:', typeOfIndustry);
      console.log('Water Source:', waterSource);
      console.log('Permit Number:', peremitNumber);
    
      console.log('Water Source Permitted:', waterSourcePermitted);
      console.log('Water Source Used:', waterSourceUsed);
      console.log('Volume Of Drainage Water Permitted:', drainageWaterPeermitted);
      console.log('Drainage Water:', drainageWater);
      console.log('Other Uses:', otherUses);
      console.log('Volume For Other Use:', volumeForOtherUse);
      console.log('Specify Others:', specifyOthers);
  
      // You can add your Axios or fetch logic here to submit the data to the server
    };


    // const handleFilePicked = (fileDetails) => {
    //   // Handle the picked file details here
    //   console.log('Picked File Details:', fileDetails);
    // };

  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps="always">
    <View style={styles.Container}>
      <Text style={styles.tabHead}>1.Rural Industry Facility Information</Text>
      <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setTypeOfIndustry(item.value);
          }}
          valueofvalue={typeOfIndustry}
          placeholder="Select Type Of Industry"
        />
        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setWaterSource(item.value);
          }}
          valueofvalue={waterSource}
          placeholder="Select Water Source"
        />
  <Text style={styles.tabHead}>2.Water Source and Abstraction Information</Text>


          <TextIn
          label="Permit Number"
          myvalue={setPeremitNumber}
          value={peremitNumber}
        />
        
        <FilePicker title='Attach Permit Documents'/>
      
        
        <TextIn
          label="Water Source Permitted"
          myvalue={setWaterSourcePermitted}
          value={waterSourcePermitted}
        />
        
        <TextIn
          label="Water Source Used"
          myvalue={setWaterSourceUsed}
          value={waterSourceUsed}
        />
        
        <TextIn
          label="Vol Of Drainage Water Peermitted"
          myvalue={setDrainageWaterPeermitted}
          value={drainageWaterPeermitted}
        />
        
        <TextIn
          label="Drainage Water"
          myvalue={setDrainageWater}
          value={drainageWater}
        />
         <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setOtherUses(item.value);
          }}
          valueofvalue={otherUses}
          placeholder="Select Other Uses"
        />
        
        <TextIn
          label="Volume For Other Use"
          myvalue={setvolumeForOtherUse}
          value={volumeForOtherUse}
        />
        
        <TextIn
          label="Specify Others"
          myvalue={setSpecifyOthers}
          value={ specifyOthers}
        />
<TouchableOpacity 
style={styles.Submitbutton}
onPress={handleSubmit}>
 <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      
      </TouchableOpacity>

      <Text></Text>
     
</View>
    </ScrollView>
  )
}

export default RuralIndustry;
