import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/features/restaurants/screens/restaurant.screen';
import {theme} from "./src/infrastructure/theme"
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

export default function App() {
  let [oswaldLoaded] = useOswald({
  Oswald_400Regular
  });
  let [latoLoaded] = useLato({
    Lato_400Regular
    });

    if(!oswaldLoaded || !latoLoaded){
      return null;
    }
    console.log(oswaldLoaded)
  return (

    <>
    <ThemeProvider theme={theme}>
    <Home/>

    </ThemeProvider>

     </>
    
  );
}


