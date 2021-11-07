import React from 'react'
import { SafeAreaView,FlatList, StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import styled from  "styled-components/native";
import { Searchbar } from 'react-native-paper';
import { useContext } from 'react';
import { LocationContext } from '../../../services/locations/locations.context';
import { useState } from 'react';
import { useEffect } from 'react';

const SearchContainer =styled(View)`
padding:16px;
`

export const Search = () =>{
 const {keyword,search} = useContext(LocationContext)
 console.log(keyword)
 const [searchKeyword,setSearchKeyword] = useState(keyword)
 console.log(searchKeyword)


    return (
        <SearchContainer>
         <Searchbar
         value={searchKeyword}
         placeholder="Search for a location"
         onSubmitEditing ={ () =>{
             search(searchKeyword)
         }}
         onChangeText = {(text) =>{
             if(!text.length){
             }
             setSearchKeyword(text)
         }}
         />
        </SearchContainer>
    )
}
