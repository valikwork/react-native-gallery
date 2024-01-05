import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import ListScreen from './src/screens/ListScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import store from './src/store/store';

export type RootNativeStackNavigatorParamsList = {
  List: undefined;
  Photo: { id: string };
};

const MainStack = createNativeStackNavigator<RootNativeStackNavigatorParamsList>();

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView
        style={styles.appContainer}>
        <NavigationContainer>
          <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="List">
            <MainStack.Screen
              name="List"
              component={ListScreen}
            />
            <MainStack.Screen name="Photo" component={PhotoScreen} />
          </MainStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
