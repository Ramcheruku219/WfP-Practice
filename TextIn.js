import React from "react";
import {View,Text,TextInput}from 'react-native';

//  import { TextInput } from "react-native-paper";
// import { FloatingLabelInput } from "react-native-floating-label-input";

const TextIn = ({label,myvalue,value, })=>{

    return(
        //  <View style={{margin:10}}>

          <View style={{ 
                
            width: '103%',
             height: 50,
             borderColor: 'gray',
             borderWidth: 1,
            // borderBottomWidth:1,
             borderRadius: 5,
             padding: 7,
             marginVertical: 10,
             marginLeft:-5
           
             }}>
            <TextInput
            label={label}
            placeholder={label}
            placeholderTextColor="#888"
            mode="outlined"
            style={{backgroundColor:'#f0f6f8'}}
            value={value}
            onChangeText={myvalue}

            />


        </View>
        // </View>
    )
}

export default TextIn;