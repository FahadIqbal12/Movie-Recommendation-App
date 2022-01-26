import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import PopularScreen from './screens/popular';
import RecommendationScreen from './screens/recommendation';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}
const AppTopNavigation=createMaterialTopTabNavigator({
  RecommendedMovies:{
    screen:RecommendationScreen,
    navigationOptions:{
      tabBarLabel:'Recommended',
      tabBarOptions:{
        tabStyle:{backgroundColor:'#fff'},
        labelStyle:{color:'#000'},
        indicatorStyle:{backgroundColor:'#000'}
      }
    }
  },
  PopularMovies:{
    screen:PopularScreen,
    navigationOptions:{
      tabBarLabel:'Popular',
      tabBarOptions:{
        tabStyle:{backgroundColor:'#fff'},
        labelStyle:{color:'#000'},
        indicatorStyle:{backgroundColor:'#000'}
      }
    }
  }
})


const AppStackNavigator = createStackNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        headerShown:false
      }
    },

    AppTopNav:{
      screen:AppTopNavigation,
      navigationOptions:{
        headerBackTitle:null,
        headerTintColor:'#fff',
        headerTitle:'Recommended Movies',
        headerStyle:{backgroundColor:'#df00f9'},
        headerTitleStyle:{
          color:'#fff',
          fontWeight:'bold',
          fontSize:RFValue(18)

        }
      }
    }
  },{
    initialRouteName:'Home'
  }
)
const AppContainer = createAppContainer(AppStackNavigator)