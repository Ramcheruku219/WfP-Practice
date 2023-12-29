import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FacilityInformation from '../Pages/AddFacility/FacilityInformation';
import FunderInformation from '../Pages/AddFacility/FunderInformation';
import ManagementInformation from '../Pages/AddFacility/ManagementInformation';

const Tab = createMaterialTopTabNavigator();

const TopTab=()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Facility Information" 
      component={FacilityInformation}
       />
      <Tab.Screen name="Funder Information"
       component={FunderInformation} 
       />
        <Tab.Screen name="Management Information"
       component={ManagementInformation} 
       />
    </Tab.Navigator>
  );
}

export default TopTab;