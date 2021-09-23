import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/features/restaurants/screens/restaurant.screen';
import {theme} from "./src/infrastructure/theme"
export default function App() {
  return (

    <>
    <ThemeProvider theme={theme}>
    <Home/>

    </ThemeProvider>

     </>
    
  );
}


