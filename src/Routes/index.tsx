import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Router = createStackNavigator();

const Routes: React.FC = () => (
  <Router.Navigator screenOptions={{ headerShown: false }}>
    <Router.Screen name="Home" component={Home} />
    <Router.Screen name="Login" component={Login} />
    <Router.Screen name="Register" component={Register} />
  </Router.Navigator>
);

export default Routes;
