import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { DateTimePickerModal } from "react-native-modal-datetime-picker";
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const MyDatePicker = ({ title }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  return (
    <View>
      <View
        style={{
          width: "103%",
          height: 50,
          borderColor: "gray",
          flexDirection: "row",
          borderWidth:1,
          // borderBottomWidth:1,
          borderRadius: 5,
          padding: 7,
          marginVertical: 10,
          marginLeft: -5,
          alignItems: "center",
          justifyContent: "space-between",
          opacity:0.5
        }}
      >
        <Text style={{}}>
          {selectedDate ? selectedDate.toLocaleString() : title}
        </Text>
        <TouchableOpacity onPress={showDatePicker} style={{}}>
       
        <Fontisto name="date" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date" // You can use "date" or "time"
        // mode as well
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
export default MyDatePicker;
const styles = StyleSheet.create({});
