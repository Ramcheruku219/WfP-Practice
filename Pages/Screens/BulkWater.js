import { StyleSheet, Text, View,ScrollView,TouchableOpacity} from 'react-native'
import React,{useState}from 'react'
import TextIn from '../../TextIn'
import DropdownComponent from '../AddFacility/Cosands/Dropdown'
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
const BulkWater = () => {
    const [permitNumber, setPermitNumber] = useState();
 
    const [abstractionPermitted, setAbstractionPermitted] = useState();
    const[waterAbstraction,setWaterAbstraction]=useState();
    const[waterUsePermited,setWaterUsePermited]=useState();
    const [waterUsed, setWaterUsed] = useState();
    const[waterWastagePermitted,setWaterWastagePermitted]=useState();
    const [wasteWater, setWasteWater] = useState();
    const[waterRequired,setWaterRequired]=useState();
    const[coverageArea,setCoverageArea]=useState();
    const [numberOfhouseholds, setNumberOfhouseholds] = useState();
    const[wateruse,setWateruse]=useState();

    const handleSubmit = () => {
      console.log('Permit Number:', permitNumber);
   
      console.log('Volume Of Water Abstraction Permitted:', abstractionPermitted);
      console.log('Volume Of Water Abstraction:', waterAbstraction);
      console.log('Volume Of Water Use Permited:', waterUsePermited);
      console.log('Volume Of Water Used:', waterUsed);
      console.log('Volume Of Water Wastage Permitted:', waterWastagePermitted);
      console.log('Volume Of Waste Water:', wasteWater);
      console.log('Total Amount Water Required:', waterRequired);
      console.log('Coverage Area:', coverageArea);
      console.log('Number Of households:', numberOfhouseholds);
      console.log('Water Use:', wateruse);
  
      // Add any additional logic here, such as submitting the data to a server
    };
  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps="always">
    <View style={styles.Container}>
      <Text style={styles.tabHead}>Bulk Water Scheme Facility Information</Text>
  <TextIn
          label="Permit Number"
          myvalue={setPermitNumber}
          value={permitNumber}
        />
       
  <FilePicker title='Attach Permit Files'/>

<TextIn
          label=" Vol Of Water Abstraction Permitted"
          myvalue={setAbstractionPermitted}
          value={abstractionPermitted}
        />
          <TextIn
          label="Vol Of Water Abstraction"
          myvalue={setWaterAbstraction}
          value={waterAbstraction}
        />
          <TextIn
          label="Vol oF Water Use Permited"
          myvalue={setWaterUsePermited}
          value={waterUsePermited}
        />
          <TextIn
          label="Vol Of Water Used"
          myvalue={setWaterUsed}
          value={waterUsed}
        />
          <TextIn
          label="Volume Of Water Wastage Permitted"
          myvalue={setWaterWastagePermitted}
          value={waterWastagePermitted}
        />
          <TextIn
          label="Volume Of Waste Water"
          myvalue={setWasteWater}
          value={wasteWater}
        />
          <TextIn
          label=" Total Amount Water Required"
          myvalue={setWaterRequired}
          value={waterRequired}
        />
          <TextIn
          label="Coverage Area"
          myvalue={setCoverageArea}
          value={coverageArea}
        />
          <TextIn
          label="Number Of households"
          myvalue={setNumberOfhouseholds}
          value={numberOfhouseholds}
        />
        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setWateruse(item.value);
          }}
          valueofvalue={wateruse}
          placeholder="Select Water use"
        />
     
     <TouchableOpacity 
           style={styles.Submitbutton}
           onPress={handleSubmit} >
 <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      
      </TouchableOpacity>

      <Text></Text>
</View>
    </ScrollView>
  )
}

export default BulkWater

