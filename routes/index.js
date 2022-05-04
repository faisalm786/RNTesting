import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer,  DefaultTheme,} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lookup from '../screens/Lookup';
import Details from '../screens/Details';
import Header from '../screens/Header'

const Stack = createNativeStackNavigator();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black',
  },
};

const Route = () => {
    return (
    <PaperProvider>
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    // header: ({ scene, previous, navigation }) => (
                    //     <Header scene={scene} previous={previous} navigation={navigation} />
                    // ),
                }}
                initialRouteName="Lookup"
            >
            <Stack.Screen name="Lookup" component={Lookup} />
            <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
    );
};

export default Route;
