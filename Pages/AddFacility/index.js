import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity,StyleSheet, ScrollView, Button } from 'react-native';
import { IconButton, MD3Colors } from 'react-native-paper';
import FacilityInformation from './FacilityInformation';
import FunderInformation from './FunderInformation';
import styles from './style';

import ManagementInformation from './ManagementInformation';
import TabCntrls from '../ScrolToTab'

const AddFacility = () => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [FacilityInformationData, setFacilityInformationData] = React.useState({});
    const [FunderInformationData, setFunderInformationData] = React.useState({});
    const [ManagementInformationData, setManagementInformationData] = React.useState({});

   const tabs = [

        { id: 0, name: 'Facility and Location Information' },
        { id: 1, name: 'Ownership Funder Information' },
        { id: 2, name: 'Management Information' },
     ];
 const tabContents = {
    0: <FacilityInformation FacilityInformation={FacilityInformationData} setFacilityInformation={setFacilityInformationData}  />,
        1: <FunderInformation FunderInformation={FunderInformationData} setFunderInformation={setFunderInformationData} />,
        2: <ManagementInformation ManagementInformation={ManagementInformationData} setManagementInformation={setManagementInformationData} />,
       
    };

    return (
        <View
            style={[styles.container, { backgroundColor: '#f0f6f8' }]}
        >
  
            <TabCntrls data={tabs} 
            activeTabId={activeTabId}
             setActiveTabId={setActiveTabId} 
             title={`➪  Add Facility..`}
             />
            <ScrollView
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
            >
                <View style={{ padding: 20 }}>
                    {tabContents[activeTabId]}
                </View>
            </ScrollView>

        </View>
    );
};

export default AddFacility;

