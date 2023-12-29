import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState}from 'react'
import TextIn from '../../TextIn';
import DropdownComponent from '../AddFacility/Cosands/Dropdown'
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
const FishPond = () => {
    const [numberOfFishPondsInSystem, setNumberOfFishPondsInSystem] = useState();
    const[totalSurfaceAreaPond,setTotalSurfaceAreaPond]=useState();
    const [totalVolumePond, setTotalVolumePond] = useState();
    const[otherUsers,setOtherUsers]=useState();
    const [specifyOthers, setSpecifyOthers] = useState();
 
    const handleSubmit = () => {
      console.log('Number Of Fish Ponds In System:', numberOfFishPondsInSystem);
      console.log('Total Surface Area Of The Pond:', totalSurfaceAreaPond);
      console.log('Total Volume Of The Pond:', totalVolumePond);
      console.log('Other Users:', otherUsers);
      console.log('Specify Others:', specifyOthers);
  
      // Add any additional logic here, such as submitting the data to a server
    };
  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps="always">
    <View style={styles.Container}>
      <Text style={styles.tabHead}>Fish Pond Facility Information</Text>
      <TextIn
          label="Number Of Fish Ponds In System"
          myvalue={setNumberOfFishPondsInSystem}
          value={numberOfFishPondsInSystem}
        />
         <TextIn
          label="Total Surface AreaOf The Pond(mt2)"
          myvalue={setTotalSurfaceAreaPond}
          value={totalSurfaceAreaPond}
        />
       <TextIn
          label="Total Volume Of The Pond(mt3)"
          myvalue={setTotalVolumePond}
          value={totalVolumePond}
        />
       <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setOtherUsers(item.value);
          }}
          valueofvalue={otherUsers}
          placeholder="Select Other Users"
        />
     <TextIn
          label="Specify Others"
          myvalue={setSpecifyOthers}
          value={specifyOthers}
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

export default FishPond

