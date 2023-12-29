import { StyleSheet, Text, View, ScrollView,TouchableOpacity} from "react-native";
import React, { useState,useEffect } from "react";
import TextIn from "../../TextIn";
import DropdownComponent from "./Cosands/Dropdown";
import { useNavigation } from "@react-navigation/native";
import FacilityQuestion from "./FacilityQuestion";
// import { useNavigation } from "@react-navigation/native";
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

const FacilityType = [
  
  { label: "Valley Tank", value: "Valley Tank" },
  { label: "Rural Industry", value: "Rural Industry" },
  { label: "Irrigation Scheme", value: "Irrigation Scheme" },
  { label: "GFS", value: "GFS" },
  { label: "Fish Pond", value: "Fish Pond" },
  { label: "Earth Dam", value: "Earth Dam" },
  { label: "Bulk Water", value: "Bulk Water" },
  { label: "Borehole Information", value: "Borehole Information" },
];



const FacilityInformation = () => {
  const navigation = useNavigation();
  const [facilityId, setFacilityId] = useState(null);
  const [facilityName, setFacilityName] = useState();
  const [facilityType, setFacilityType] = useState(null);
  const [zone, setZone] = useState();
  const [basin, setBasin] = useState(null);
  const [district, setDistrict] = useState();
  const [county, setCounty] = useState(null);
  const [subCounty, setsubCounty] = useState();
  const [parish, setParish] = useState(null);
  const [consituency, setConsituency] = useState();
  const [village, setVillage] = useState(null);
  const [altitude, setAltitude] = useState();
  const [distanceFromMainRoad, setDistanceFromMainRoad] = useState();
  const [distanceFromNearestTradingCenter, setDistanceFromNearestTradingCenter] = useState(null);





  const handleSubmit = () => {
  

    // Add any additional logic here, such as submitting the data to a server
  };
  useEffect(() => {
    // Check if facilityType is selected before navigating
    if (facilityType!==null) {
      // Assuming you have a "FacilityDetails" screen to navigate to
      navigation.navigate(facilityType, {
        facilityType,
        // Pass other relevant data if needed
      });
    }
  }, [facilityType, navigation]);
  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps="always">
      <View style={styles.Container}>
        <Text style={styles.tabHead}>1.Facility Information</Text>
        <TextIn
          label="Facility Id"
          myvalue={setFacilityId}
          value={facilityId}
        />
     
     <TextIn
          label="Facility Name"
          myvalue={setFacilityName}
          value={facilityName}
        />

        <DropdownComponent
          data={FacilityType}
          onchangevalue={(item) => {
            setFacilityType(item.value);
          }}
          valueofvalue={facilityType}
          placeholder="Select Facility Type"
        />
        <Text style={styles.tabHead}>2.Location Information</Text>

        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setZone(item.value);
          }}
          valueofvalue={zone}
          placeholder=" Select Zone"
        />

        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setBasin(item.value);
          }}
          valueofvalue={basin}
          placeholder=" Select Basin"
        />

        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setDistrict(item.value);
          }}
          valueofvalue={district}
          placeholder=" Select District"
        />

        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setCounty(item.value);
          }}
          valueofvalue={county}
          placeholder=" Select County"
        />

        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setsubCounty(item.value);
          }}
          valueofvalue={subCounty}
          placeholder=" Select SubCounty"
        />

        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setParish(item.value);
          }}
          valueofvalue={parish}
          placeholder=" Select Parish"
        />

        <TextIn
          label="Consituency"
          myvalue={setConsituency}
          value={consituency}
        />
<TextIn
 label="Village"
  myvalue={setVillage} value={village}
   />
  <Text style={styles.tabHead}>3.GPS Information</Text>
  <FacilityQuestion/>

  <TextIn
          label="Altitude(mt.)"
          myvalue={setAltitude}
          value={altitude}
        />
          <TextIn
          label="Distance From Main Roadency"
          myvalue={setDistanceFromMainRoad}
          value={distanceFromMainRoad}
        />
          <TextIn
          label="Distance From Nearest Trading Center"
          myvalue={ setDistanceFromNearestTradingCenter}
          value={distanceFromNearestTradingCenter}
        />


<TouchableOpacity 
                  style={styles.Submitbutton}
                  onPress={handleSubmit}
                  >
 <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      
      </TouchableOpacity>
    
   <Text></Text>
   <Text></Text>
   <Text></Text>

   <Text></Text>
   <Text></Text>
      </View>
    </ScrollView>
  );
};

export default FacilityInformation;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#f0f6f8",
    marginTop:-12
  },
  tabHead: {
    margin: 5,
    padding: 3,
    fontWeight: "500",
    borderBottomColor: "#ccc",
    borderBottomWidth: 0.5,
    color: "blue",
  },
  Submitbutton:{
    width:'50%',
    height:50,
    backgroundColor: 'blue',
     padding: 10,
      marginTop: 30,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:12,
      marginLeft:'25%',
    

  }
});
