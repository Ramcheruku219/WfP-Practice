// App.js
import React from 'react';
import { View,StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './Routes/DrawerNavigator';
import Login from './Autherization/Login';
import PinGeneration from './Autherization/PinGeneration';
import PinAccess from './Autherization/PinAccess';
// import screen 
import ValleyTank from './Pages/Screens/ValleyTank';
import RuralIndustry from './Pages/Screens/RuralIndustry';
import IrrigationScheme from './Pages/Screens/IrrigationScheme';
import Gfs from './Pages/Screens/Gfs';
import FishPond from './Pages/Screens/FishPond';
import EarthDam from './Pages/Screens/EarthDam';
import BulkWater from './Pages/Screens/BulkWater';
import BoreholeInfo from './Pages/Screens/BoreholeInfo';

const Stack =createStackNavigator();
const App = () => {
  return (
   <View style={{flex:1}}>
   <StatusBar
   backgroundColor="#20187f"
   barStyle="light-content"
/>
 <NavigationContainer>
  <Stack.Navigator>
  {/* <Stack.Screen
      name='Login'
      component={Login}
      options={{headerShown:false}}
    />
  <Stack.Screen
      name='PinGeneration'
      component={PinGeneration}
      options={{headerShown:false}}
    />
     <Stack.Screen
      name='PinAccess'
      component={PinAccess}
      options={{headerShown:false}}
    />    */}

      <Stack.Screen
      name='DrawerNavigator'
      component={DrawerNavigator}
      options={{headerShown:false}}
    />

    <Stack.Screen
      name='Valley Tank'
      component={ValleyTank}
     
    /> 
   
   <Stack.Screen
      name='Rural Industry'
      component={RuralIndustry}

    />
   
   <Stack.Screen
      name='Irrigation Scheme'
      component={IrrigationScheme}
    
    />
  
   <Stack.Screen
      name='GFS'
      component={Gfs}

    /> 
    

   <Stack.Screen
      name='Fish Pond'
      component={FishPond}
    
    />
    
   <Stack.Screen
      name='Earth Dam'
      component={EarthDam}
    
    />
   
 
    <Stack.Screen
      name='Bulk Water'
      component={BulkWater}
 
    />
   
    <Stack.Screen
      name='Borehole Information'
      component={BoreholeInfo}

    />  

  </Stack.Navigator>
 </NavigationContainer>
 </View>

  );
};

export default App;
