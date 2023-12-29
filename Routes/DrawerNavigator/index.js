import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
// import screen
import DashBoard from "../../Pages/DashBoard";
// import TopTab from "../TopTab";
import OperationMaintaince from "../../Pages/OperationMaintaince";
import AddFacility from "../../Pages/AddFacility";
import { TouchableOpacity } from "react-native-gesture-handler";
import { 
    View,
    Text,
    Image,
    SafeAreaView
  } from "react-native";
import {
    SimpleLineIcons,
    MaterialIcons,
    MaterialCommunityIcons,
    AntDesign,
    Ionicons,
    Entypo,
    Feather
  } from "@expo/vector-icons";
  import myLogo from "../../assets/logo.png"
const Drawer =createDrawerNavigator()


const DrawerNavigator=()=>{

    return(
        <Drawer.Navigator
          drawerType="slide"
      drawerContent={(props) => {
        return (
          <SafeAreaView>

  <TouchableOpacity style={{padding: 5,paddingLeft:15}}>
  <Ionicons
    name="arrow-back-sharp"
    size={24}
    color="black"
    onPress={() => props.navigation.goBack()}
  />
  </TouchableOpacity>
  <View
              style={{
                height: 50,
                width: "100%",                
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#f4f4f4",
                borderBottomWidth: 1,
              }}
            >
               <Text
                style={{
                    marginVertical: 7,
                    fontWeight: "bold",
                    fontSize: 16,
                    color: "#20187f",
                    marginTop:2
                }}
            >
               
               WATER FOR PRODUCTION
            </Text>
              </View>
           <DrawerItemList {...props} />
            <View
              style={{
                height: 900,
                width: "100%",
                justifyContent: "center",
                borderTopColor: "#f4f4f4",
                borderTopWidth: 1,
              }}
            >
              {/* <Image
                source={WiseLogo}
                style={{
                  height:80,
                  width: 170,
                  marginLeft:15
                }}
              /> */}
              <View 
              style={{ 
                alignItems: 'center',
                 marginVertical: 20,
              
            
                   }}>
            <Image 
            source={require('../../assets/logo.png')}
              style={{ height: 30, width: 30 }} />

            <Text
                style={{
                    fontSize: 12,
                    marginVertical: 6,
                    fontWeight: "bold",
                    color: "#20187f"
                }}

            >
                Republic Of Uganda
            </Text>

            <Text
                style={{
                    marginVertical: 6,
                    fontWeight: "bold",
                    fontSize: 9,
                    color: "#20187f",
                    textAlign: 'center',
                    
                  
                }}
            >
                Ministry of Water & Environment
            </Text>

            <Text
                style={{
                    marginVertical: 6,
                    fontWeight: "bold",
                    fontSize: 10,
                    color: "#20187f"
                }}
            >
               
               WATER FOR PRODUCTION
            </Text>
        </View>
           </View>
          </SafeAreaView>
        );
      }}
        screenOptions={{
            drawerStyle: {
                backgroundColor: "#f7ffff",
                
                width: '65%',
            },
            headerStyle: {
                backgroundColor: "#0D47a4",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            drawerLabelStyle: {
                color: "#111",
            },
          
        }}
      
        >

            <Drawer.Screen
            name='DashBoard'
            component={DashBoard}
            options={{
                headerTitle:()=>
                {
                  return(
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:17,marginLeft:50}}>Water For Production</Text>
                  )
                 },
                drawerLabel: "DashBoard",
                title: "DashBoard",
                drawerIcon: () => (
                    <MaterialIcons name="dashboard-customize" size={24} color="black" />
                 
                ),
              }}
            />
            <Drawer.Screen
            name='Add Facility'
            component={AddFacility}
            options={{
                headerTitle:()=>
                {
                  return(
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:17,marginLeft:50}}>Water For Production</Text>
                  )
                 },
                drawerLabel: "Add Facility",
                title: "Add Facility",
                drawerIcon: () => (
                  <Entypo name="add-to-list" size={24} color="black" />
           
                
                ),
              }}
            />
                <Drawer.Screen
            name='Operation & Maintaince'
            component={OperationMaintaince}
            options={{
                headerTitle:()=>
                {
                  return(
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:17,marginLeft:50}}>Water For Production</Text>
                  )
                 },
                drawerLabel: "Operation & Maintaince",
                title: "Operation & Maintaince",
                drawerIcon: () => (
                  <Ionicons name="save-sharp" size={24} color="black" />
                ),
              }}
            />

{/* <Drawer.Screen
            name='Maintaince'
            component={TopTab}
            options={{
                headerTitle:()=>
                {
                  return(
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:17,marginLeft:75}}>Water For Production</Text>
                  )
                 },
                drawerLabel: "Maintaince",
                title:"Maintaince",
                drawerIcon: () => (
                  <Entypo name="add-to-list" size={24} color="black" />
                ),
              }}
            /> */}



        </Drawer.Navigator>

    )
}

export default DrawerNavigator