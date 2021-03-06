import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, LogBox, Button } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';
import RootApp from './src/navigation';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


const App = () => {
 
  
  return (
    <View style={{ flex: 1 ,backgroundColor:'red'}}>
      <Provider store={Store}>
        <RootApp />
      </Provider>
    </View>
  )
}
export default App;

