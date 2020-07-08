import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Colors from './styles/Colors';
import Routes from './Routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
    <View style={{ flex: 1, backgroundColor: Colors.primary }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
