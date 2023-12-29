import { StyleSheet, Text, View } from 'react-native'
import React,{useState}from 'react'
import TextIn from '../../TextIn'
import DropdownComponent from '../AddFacility/Cosands/Dropdown'
import { RadioButton, Text as PaperText } from 'react-native-paper';
import MyDatePicker from '../MyDatePicker'
import styles from './style';
const Question = () => {
    const [dateOfTraining, setDateOfTraining] = useState();
    const [isYesClicked, setIsYesClicked] = useState(null);


    
  
  const handleRadioButtonChange = (value) => {
    setIsYesClicked(value);
  };

  return (
    <View>
   
<View style={styles.buttonContainer}>
          <RadioButton.Group onValueChange={handleRadioButtonChange} 
          value={isYesClicked}>

           
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButton}>
              <Text style={{marginRight:82}}>Any Training held ?</Text>
                <RadioButton value="Yes" />
                <PaperText>Yes</PaperText>
              </View>

         
           
              <View style={styles.radioButton}>
                <RadioButton value="No" />
                <PaperText>No</PaperText>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        {/* Conditionally render fields based on yes or no */}
        {isYesClicked === 'Yes' ? (
          <View>
          <MyDatePicker
         setDateOfTraining={setDateOfTraining} 
         title="Date Of Training"
         />
             
            {/* Add more fields for Yes condition if needed */}
          </View>
        ) : isYesClicked === 'No' ? (
          <View>
          
            {/* Add more fields for No condition if needed */}
          </View>
        ) : null}
    </View>
  )
}

export default Question

