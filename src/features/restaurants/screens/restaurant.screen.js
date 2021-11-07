import React,{ useContext }  from 'react';
import { SafeAreaView,FlatList, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.component';
import styled from  "styled-components/native";
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from '../components/search.component';

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
const loader =styled(ActivityIndicator)`
margin-top:50%;

`
const RestaurantListComponent = styled(View)`
flex:1;
padding:16px;
`; 
export const Home = () =>
 {
   const {restaurants,isLoading,error} = useContext(RestaurantContext);
   console.log(isLoading)

   if(isLoading){
     return(
      <ActivityIndicator style={styles.load} animating={isLoading} color={Colors.red800} />
     )
   }
 return (
 <>

    <Search/>
     <FlatList
        data={restaurants}
        renderItem={ ({item})=> <RestaurantInfo restaurant={item}/>}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding:16}}
      />
</>
);

}
const styles = StyleSheet.create({
load:{
  marginTop:200,
}
})