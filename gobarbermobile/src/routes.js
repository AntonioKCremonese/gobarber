import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

export default (signedIn = false) =>
createAppContainer(
    createSwitchNavigator({
        Sign:createSwitchNavigator({
            Signin,
            Signup
        }),
        App:createBottomTabNavigator({
            Dashboard
        },{
            tabBarOptions:{
                keyboardHidesTabBar:true,
                activeTintColor:'#fff',
                inactiveTintColor:'rgba(255,255,255,0.6)',
                style:{
                    backgroundColor:'#8d41a8'
                }
            }
        })
    },{
        initialRouteName: signedIn ? 'App':'Sign'
    })
);