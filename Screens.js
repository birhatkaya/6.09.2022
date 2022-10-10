import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();




//screens
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/search";
import ShopScreen from "./screens/shop";
import ProfileScreen from "./screens/profile"
import ReelScreen from "./screens/reel"




function Screens() {
    return (
    <Tab.Navigator screenOptions={{tabBarShowLabel:false, headerShown:false}}>
      <Tab.Screen name="home" component={HomeScreen} options={{headerTitle:'Anasayfa', 
      tabBarIcon: ({focused, color, size}) => {
        if(focused)
        return <Ionicons name='home' style={{fontSize:30}} />

        return <Ionicons name='home-outline' style={{fontSize:30}}/>
      }
      }}/>
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{
        tabBarIcon: ({focused})    => {
            if(focused)
            return <Ionicons name='search'  style={{fontSize:30}} />
            return <Ionicons name='search-outline'  style={{fontSize:30}} />
        }
      }}/>
      <Tab.Screen name="reel" component={ReelScreen} options={{
        tabBarIcon: ({focused}) => {
            if(focused)
            return <Ionicons name='add-circle' style={{fontSize:30}} />
            return <Ionicons name='add-circle-outline' style={{fontSize:30}} />
        }
      }} />
      <Tab.Screen name="ShopScreen" component={ShopScreen} options={{
        tabBarIcon: ({focused, color, size}) => {
            if(focused)
            return <Ionicons name='basket' style={{fontSize:30}} />
            return <Ionicons name='basket-outline' style={{fontSize:30}} />
      }
      }}/>
      <Tab.Screen name="profile" component={ProfileScreen} options={{
        tabBarIcon: ({focused}) => (
            <Image 
                style={[styles.pp, {borderColor: focused ? 'black' : 'transparent'}]}
                source={{uri:"https://i.pinimg.com/736x/af/10/3b/af103b9a09ecd855519258261577a950.jpg"}}
            />
        )
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    pp:{
        width:30,
        height:30,
        borderRadius:15,
        borderWidth:1.5,
    }
})

export default Screens