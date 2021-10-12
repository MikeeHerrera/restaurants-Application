import React,{ useState,useContext,useEffect,useMemo, createContext} from 'react';
import { restaurantsRequest, restaurantsTrasnfrom } from './restaurants.service';


export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {
 
  const [restaurants,setRestaurants] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error, setError] =useState(false);
  const  retrievedRestaurants = () =>{

    setIsLoading(true)
    setTimeout(() =>{
      restaurantsRequest().then(restaurantsTrasnfrom).then(results =>{
        setIsLoading(false)
        setRestaurants(results)
      }).catch((error) =>{
        setIsLoading(false)
        setError(error)
      })
    },2000)
  }
 
  useEffect (() =>{
    retrievedRestaurants()
  },[]);
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