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
  
const Gfs = () => {
    const [permitNumber, setPermitNumber] = useState();

    const [waterAbstractionPermitted, setWaterAbstractionPermitted] = useState();
    const[waterAbstraction,setWaterAbstraction]=useState();
    const [coverageArea, setCoverageArea] = useState();
    const[numberOfHouseholds,setNumberOfHouseholds]=useState();
    const [waterUse, setWaterUse] = useState();
 

    const handleSubmit = () => {
      console.log('Permit Number:', permitNumber);

      console.log('Vol Of Water Abstraction Permitted:', waterAbstractionPermitted);
      console.log('Vol Of Water Abstraction:', waterAbstraction);
      console.log('Coverage Area:', coverageArea);
      console.log('Number Of Households:', numberOfHouseholds);
      console.log('Water Use:', waterUse);
  
      // Add any additional logic here, such as submitting the data to a server
    };
  
  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps="always">
    <View style={styles.Container}>
      <Text style={styles.tabHead}>GFS Facility Information</Text>
      <TextIn
          label="Permit Number"
          myvalue={setPermitNumber}
          value={permitNumber}
        />
       
           <FilePicker title='Attach Permit Files'/>
       <TextIn
          label="Vol Of Water Abstraction Permitted"
          myvalue={setWaterAbstractionPermitted}
          value={waterAbstractionPermitted}
        />   
          <TextIn
          label="Vol Of Water Abstraction"
          myvalue={setWaterAbstraction}
          value={waterAbstraction}
        />
             <TextIn
          label="Coverage Area"
          myvalue={setCoverageArea}
          value={coverageArea}
        />
             <TextIn
          label="Number Of Households"
          myvalue={setNumberOfHouseholds}
          value={numberOfHouseholds}
        />
       <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setWaterUse(item.value);
          }}
          valueofvalue={waterUse}
          placeholder="Select Water Use"
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

export default Gfs;

