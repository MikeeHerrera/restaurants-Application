import * as React from 'react';

import{ useState,useContext,useEffect,useMemo, createContext} from "react";
import { restaurantsRequest, restaurantsTrasnfrom } from './restaurants.service';
import { LocationContext } from '../locations/locations.context';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
 
  const [restaurants,setRestaurants] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error, setError] =useState(null);
  const {location} =useContext(LocationContext)

  const  retrievedRestaurants = (location) =>{
    setIsLoading(true)
    setRestaurants([]);
    setTimeout(() =>{
      restaurantsRequest(location).then(restaurantsTrasnfrom).then(results =>{
        setIsLoading(false)
        setRestaurants(results)
      }).catch((error) =>{
        setIsLoading(false)
        setError(error)
      })
    },2000)
  }
 
 useEffect(() => {
   if(location){
     const locationString = `${location.lat},${location.lng}`
    retrievedRestaurants(locationString)
     console.log(locationString)
   }
  }, [location]);

    return <RestaurantContext.Provider
    value = {{
      restaurants,
      isLoading,
      error
    }}
    >
    {children}
  </RestaurantContext.Provider>
        
}