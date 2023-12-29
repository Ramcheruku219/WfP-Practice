import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity 
} from "react-native";
import React, { useState } from "react";
import TextIn from "../../TextIn";
import DropdownComponent from "./Cosands/Dropdown";
import Que1 from "../funderQestions/que1";
import Que2 from "../funderQestions/que2";
import Que3 from "../funderQestions/que.3";
import MyDatePicker from "../MyDatePicker";
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
const FunderInformation = () => {
  const [isYesClicked, setIsYesClicked] = useState(null);
  const [sourceNo, setSourceNo] = useState();
  const [sourceName, setSourceName] = useState();
  const [finalcialYear, setfinalcialYear] = useState();
  const [yearOfConstruction, setyearOfConstruction] = useState();
  const [typeOfOwnership, setTypeOfOwnership] = useState();
  const [instituteName, setInstituteName] = useState();
  const [ownerContactName, setOwnerContactName] = useState();
  const [ownershipAddress, setOwnershipAddress] = useState();
  const [ownershipEmail, setOwnershipEmail] = useState();
  const [ownershipContactNumber, setOwnershipContactNumber] = useState();
  const [sourceOfFundingType, setSourceOfFundingType] = useState();
  const [funderInstituteName, setFunderInstituteName] = useState();
  const [funderContactName, setFunderContactName] = useState();
  const [funderAddress,setFunderAddress]=useState();
  const [funderEmail,setFunderEmail]=useState();
  const [funderContactNumber,setFunderContactNumber]=useState();
  const [typeOflandownership, setTypeOflandownership] = useState();
  const [landownerInstututeName, setLandownerInstututeName] = useState();
  const [landownerContactNumber, setLandownerContactNumber] = useState();
  const [landownershipAddress, setLandownershipAddress] = useState();
  const [landownershipEmail, setLandownershipEmail] = useState();
  const [landOwnershipContactNumber, setLandOwnershipContactNumber] =useState();
  const [typeOfConstructionEquipment, setTypeOfConstructionEquipment] =useState();
  const [constructionEquipment, setConstructionEquipment] = useState();
  const [totalInvestmentCost, setTotalInvestmentCost] = useState();
  const [catchmentArea, setCatchmentArea] = useState();
  const [remark, setRemark] = useState();

  const handleRadioButtonChange = (value) => {
    setIsYesClicked(value);
  };

  const handleSubmit = () => {
  

    // Add any additional logic here, such as submitting the data to a server
  };
  return (
    <ScrollView style={styles.Container} keyboardShouldPersistTaps="always">
      <View style={styles.Container}>
        <Text style={styles.tabHead}>4.Source Information</Text>
        <TextIn
          label="Source No"
          myvalue={setSourceNo}
          value={sourceNo}
        />
        <TextIn
          label="Source Name"
          myvalue={setSourceName}
          value={sourceName}
        />

        <MyDatePicker
          setfinalcialYear={setfinalcialYear}
          title="Finalcial Year"
        />

        <MyDatePicker
          setfinalcialYear={setyearOfConstruction}
          title="year Of Construction"
        />
        <Text style={styles.tabHead}>5.Ownership and funding Information</Text>
        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setTypeOfOwnership(item.value);
          }}
          valueofvalue={typeOfOwnership}
          placeholder="Type Of Ownership"
        />
        <TextIn
          label="Ownership Institute Name"
          myvalue={setInstituteName}
          value={instituteName}
        />
        <TextIn
          label="Ownership Contact Name"
          myvalue={setOwnerContactName}
          value={ownerContactName}
        />
        <TextIn
          label="Ownership Address"
          myvalue={setOwnershipAddress}
          value={ownershipAddress}
        />
        <TextIn
          label="Ownership Email"
          myvalue={setOwnershipEmail}
          value={ownershipEmail}
        />
        <TextIn
          label="Ownership Contact Number"
          myvalue={setOwnershipContactNumber}
          value={ownershipContactNumber}
        />
        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setSourceOfFundingType(item.value);
          }}
          valueofvalue={sourceOfFundingType}
          placeholder="Source Of Funding Type"
        />

        <TextIn
          label="Funder Institute Name"
          myvalue={setFunderInstituteName}
          value={funderInstituteName}
        />
        <TextIn
          label="Funder Contact Name"
          myvalue={setFunderContactName}
          value={funderContactName}
        />
   
          <TextIn
          label="Funder Contact Name"
          myvalue={setFunderContactName}
          value={funderContactName}
        />
          <TextIn
          label="Funder Address"
          myvalue={setFunderAddress}
          value={funderAddress}
        />
           <TextIn
          label="Funder Email"
          myvalue={setFunderEmail}
          value={funderEmail}
        />
          <TextIn
          label="Funder Contact Number"
          myvalue={setFunderContactNumber}
          value={funderContactNumber}
        />
        <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setTypeOflandownership(item.value);
          }}
          valueofvalue={typeOflandownership}
          placeholder="Type Of land Ownership"
        />
        <TextIn
          label="Land Ownership Instutute Name"
          myvalue={setLandownerInstututeName}
          value={landownerInstututeName}
        />
        <TextIn
          label="Land Ownership Contact Number"
          myvalue={setLandownerContactNumber}
          value={landownerContactNumber}
        />
        <TextIn
          label="Land Ownership Address"
          myvalue={setLandownershipAddress}
          value={landownershipAddress}
        />
        <TextIn
          label="Land Ownership Email"
          myvalue={setLandownershipEmail}
          value={landownershipEmail}
        />
        <TextIn
          label="Land Ownership Contact Number"
          myvalue={setLandOwnershipContactNumber}
          value={landOwnershipContactNumber}
        />
      <DropdownComponent
          data={data}
          onchangevalue={(item) => {
            setTypeOfConstructionEquipment(item.value);
          }}
          valueofvalue={typeOfConstructionEquipment}
          placeholder="Type Of Construction Equipment"
        />
          <TextIn
          label="Construction Equipment Given By"
          myvalue={setConstructionEquipment}
          value={constructionEquipment}
        />
        <TextIn
          label="Total Investment Cost(ugx.)"
          myvalue={setTotalInvestmentCost}
          value={totalInvestmentCost}
        />
        <TextIn
          label="Catchment Area (sq.km.)"
          myvalue={setCatchmentArea}
          value={catchmentArea}
        />
        
      <Que1/>
      <Que2/>
      <Que3/>

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

export default FunderInformation;

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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  radioButtonContainer: {
    flexDirection: "row",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
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
