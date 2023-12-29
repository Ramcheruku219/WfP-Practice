import { StyleSheet, Text, View, ScrollView,TouchableOpacity  } from "react-native";
import React, { useState } from "react";
import TextIn from "../../TextIn";
import DropdownComponent from "./Cosands/Dropdown";
import MyDatePicker from "../MyDatePicker";
import Question from "../Question";
import Question1 from "../Question/Question1";
import Question2 from "../Question/Question2";
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
const ManagementInformation = () => {

  const [typeOfManagement, setTypeOfManagement] = useState();
  const [otherSpecify, setOtherSpecify] = useState();
  const [communualManagement, setCommunualManagement] = useState();
  const [yearOfEstablishment, setYearOfEstablishment] = useState();
  const [noOfEstablishment, setNoOfEstablishment] = useState();
  const [managementInstituteName, setManagementInstituteName] = useState();
  const [managementContactName, setManagementContactName] = useState();
  const [managementContactEmail, setManagementContactEmail] = useState();
  const [managementContactNumber, setManagementContactNumber] = useState();
  const [managementAddress, setManagementAddress] = useState();

  const handleSubmit = () => {
  

    // Add any additional logic here, such as submitting the data to a server
  };
  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps="always">
      <View style={styles.Container}>
        <Text style={styles.tabHead}>6. Management Information</Text>
        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setTypeOfManagement(item.value);
          }}
          valueofvalue={typeOfManagement}
          placeholder="Select Type Of Management"
        />

        <TextIn
          label="Other Specify"
          myvalue={setOtherSpecify}
          value={otherSpecify}
        />
        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setCommunualManagement(item.value);
          }}
          valueofvalue={communualManagement}
          placeholder="Type Of Communual Management"
        />
      
        <MyDatePicker
          setYearOfEstablishment={setYearOfEstablishment}
          title="Year Of Establishment"
        />
        <TextIn
          label="No Of Establishment"
          myvalue={setNoOfEstablishment}
          value={noOfEstablishment}
        />

        <Question />
        <Question1 />
        <Question2 />

        <TextIn
          label="Management Institute Name"
          myvalue={setManagementInstituteName}
          value={managementInstituteName}
        />
        <TextIn
          label="Management Contact Name"
          myvalue={setManagementContactName}
          value={managementContactName}
        />
        <TextIn
          label="Management Contact Email"
          myvalue={setManagementContactEmail}
          value={managementContactEmail}
        />
        <TextIn
          label="Management Contact Number"
          myvalue={setManagementContactNumber}
          value={managementContactNumber}
        />
        <TextIn
          label="Management Address"
          myvalue={setManagementAddress}
          value={managementAddress}
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

export default ManagementInformation;

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
