import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { useState, useEffect } from 'react';
import { NativeBaseProvider } from "native-base";
import Route from './routes';
import { store } from './store/store';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function getFonts() {
      await fetchFonts();
    }
    getFonts();
  }, []);

  const fetchFonts = () =>
  Font.loadAsync({
    'montserrat_thin': require('./assets/fonts/montserrat_thin.ttf'),
    'montserrat_bold': require('./assets/fonts/montserrat_bold.ttf'),
    'montserrat_semibold': require('./assets/fonts/montserrat_semibold.ttf'),
    'montserrat_light': require('./assets/fonts/montserrat_light.ttf'),
    'montserrat_regular': require('./assets/fonts/montserrat_regular.ttf'),
  }).then( () => setFontsLoaded(true) );


  if (fontsLoaded) {
    return (
      <NativeBaseProvider>
        <Provider store={store}>
          <Route />
        </Provider>
      </NativeBaseProvider>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
