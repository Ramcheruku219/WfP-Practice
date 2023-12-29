import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from
'react-native';
import * as DocumentPicker from 'expo-document-picker';

const FilePicker=({title})=>{
const [selectedDocument, setSelectedDocument] = useState({});

const pickDocument = async () => {
const result = await DocumentPicker.getDocumentAsync({});
console.log('====================================')
console.log(result.assets[0])
console.log('====================================')
if (result.canceled === true) {
console.log("not selected any file");
} else {
setSelectedDocument(result.assets[0]);
}
};
return (
<View style={styles.container}>
<Text style={{opacity:0.5}}>{selectedDocument.name || title}</Text>
<TouchableOpacity
style={styles.attach}
onPress={()=>pickDocument()}
>
<Text
style={{color:"white",fontWeight:"500",fontSize:20}}>Attach</Text>
</TouchableOpacity>
</View>
);
}
const styles = StyleSheet.create({
container: {
width: '103%',
borderWidth:1,
flexDirection:"row",
marginVertical:10,
justifyContent:"space-between",
borderRadius: 5,
height:50,
alignItems:'center',
paddingLeft:5,
borderColor:"gray",
marginLeft:-5



},
attach:{
backgroundColor:"gray",
height:50,
width:"28%",
borderTopRightRadius:5,
borderBottomRightRadius:5,
alignItems:'center',
justifyContent:'center'

}
})

export default FilePicker;