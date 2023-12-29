import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState}from 'react'
import TextIn from '../../TextIn';
import DropdownComponent from '../AddFacility/Cosands/Dropdown';
import styles from './style';

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

 

const ValleyTank = () => {
    const [volumeOfFacility, setVolumeOfFacility] = useState();
    const[abstractionMethod,setAbstractionMethod]=useState();
    const [waterUse, setWaterUse] = useState();
    const[coverageArea,setCoverageArea]=useState();
    const [numberOfHouseHolds, setNumberOfHouseHolds] = useState();
    const[amountOfWaterUsed,setAmountOfWaterUsed]=useState();
    const [amountOfWasteWater, setAmountOfWasteWater] = useState();
    const[totalAmountOfWaterRequired,setTotalAmountOfWaterRequired]=useState();


    const handleSubmit = () => {
      // Log the values to the console
      console.log('Volume Of Facility:', volumeOfFacility);
      console.log('Abstraction Method:', abstractionMethod);
      console.log('Water Use:', waterUse);
      console.log('Coverage Area:', coverageArea);
      console.log('Number Of House Holds:', numberOfHouseHolds);
      console.log('Amount Of Water Used:', amountOfWaterUsed);
      console.log('Amount Of Waste Water:', amountOfWasteWater);
      console.log('Total Amount Of Water Required:', totalAmountOfWaterRequired);
  
      // You can add your Axios or fetch logic here to submit the data to the server
    };
  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps="always">
    <View style={styles.Container}>
      <Text style={styles.tabHead}>Valley Tank Facility Information</Text>
  <TextIn
          label="Volume Of Facility(mt3)"
          myvalue={setVolumeOfFacility}
          value={volumeOfFacility}
        />

<DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setAbstractionMethod(item.value);
          }}
          valueofvalue={abstractionMethod}
          placeholder="Select Abstraction Method"
        />
        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setWaterUse(item.value);
          }}
          valueofvalue={waterUse}
          placeholder="Water Use"
        />
          <TextIn
          label="Coverage Area(mt2)"
          myvalue={setCoverageArea}
          value={coverageArea}
        />
          <TextIn
          label="Number Of House Holds"
          myvalue={setNumberOfHouseHolds}
          value={numberOfHouseHolds}
        />
          <TextIn
          label="Amount Of Water Used(mt3)"
          myvalue={setAmountOfWaterUsed}
          value={amountOfWaterUsed}
        />
     
          <TextIn
          label="Amount Of Waste Water(mt3)"
          myvalue={setAmountOfWasteWater}
          value={amountOfWasteWater}
        />
        <TextIn
          label="Total Amount Of Water Required(mt3)"
          myvalue={setTotalAmountOfWaterRequired}
          value={totalAmountOfWaterRequired}
        />


<TouchableOpacity 
style={styles.Submitbutton}
onPress={handleSubmit}>
 <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      
      </TouchableOpacity>
     
     </View>
    </ScrollView>
  )
}

export default ValleyTank

