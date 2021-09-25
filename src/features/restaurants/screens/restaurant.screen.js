import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';
import styled from  "styled-components/native";

const dispositivo = Platform.OS == 'android';
const b = StatusBar.currentHeight
console.log(StatusBar.currentHeight)
const SafeArea =  styled(SafeAreaView)`
flex:1;
margin-top:${StatusBar.currentHeight} 
`;

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

