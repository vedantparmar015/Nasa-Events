import React,{Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/homeScreen';
import Profile from '../screens/profileScreen';
import Logout from '../screens/logoutScreen'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true,
    };
  }

  render() {
    return (
     
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            inactiveTintColor: this.state.light_theme ? 'black' : 'white',
            itemStyle: { marginVertical: 5 },
          }}>
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ unmountOnBlur: true }}
          />
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{ unmountOnBlur: true }}
          />
          <Drawer.Screen
            name="Logout"
            component={Logout}
            options={{ unmountOnBlur: true }}
          />
        </Drawer.Navigator>
     
    );
  }
}
