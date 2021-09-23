import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { StatusBar as statusB } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';
import styled from  "styled-components/native";

const dispositivo = Platform.OS == 'android';

const SafeArea =  styled(SafeAreaView)`
flex:1;
${StatusBar.currentHeight} && 'margin-top': ${StatusBar.currentHeight}px`;

const SearchContainer = styled(View)`
padding:16px;
`;

const RestaurantListComponent = styled(View)`
flex:1;
padding:16px;
`; 
export const Home = () =>
 (
  <SafeArea>
    <SearchContainer >
   
      
    <Searchbar
      placeholder="Search"/> 
     </SearchContainer>
    <RestaurantListComponent>
       <RestaurantInfo/>
    </RestaurantListComponent>
  </SafeArea>


);

