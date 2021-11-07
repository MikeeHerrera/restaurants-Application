import React,{useState,createContext, useEffect} from 'react'
import {requestLocation,locationTransform} from './locations.service';

export const LocationContext = createContext();
export const LocationContextProvider = ({children}) =>{

    const [keyword,setKeyword] = useState("san francisco");
    const [location,setLocation] = useState(null);
    const [error,setError] =useState(false);
    const [isLoading,setIsloading] = useState(null);
    const onSearch = (searchKeyWord) =>{


        // console.log(searchKeyWord);
        setIsloading(true)
        setKeyword(searchKeyWord)

        if(!searchKeyWord.length){
            return;
        }
        requestLocation(searchKeyWord.toLowerCase()).
        then(locationTransform).
        then((result) => {
            console.log(result)
            setIsloading(false)
            setLocation(result)
        }).catch((error) => {
            setIsloading(false)
            setError(error)

        })
    };

    useEffect(() => {
       onSearch(keyword)
    }, [keyword])
    return <LocationContext.Provider
    value = {{keyword,isLoading,error,location,search : onSearch}}
    >
    {children}
    </LocationContext.Provider>
}