import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Questionary from './src/views/questionary';
const Stack = createStackNavigator();

const logoTitle = (title: string) => <View style={{ flexDirection: "row", alignItems: "center"}}>
    <Image
      style={{ width: 130, resizeMode: 'contain' }}
      source={require('./assets/teamCorelogo.png')}
    />
    <Text style={{ fontWeight: 'bold', color: '#fff', marginTop: 7}}>{title}</Text>
  </View>

export default function App(props: any) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{
            headerTitle: logoTitle('Cuestionario'),
            headerStyle: {
              backgroundColor: '#091e5a',
            },
          }} name="Home" component={Questionary} {...props}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
