import {
    mockImages,
    mocks
}
from "../mock";

import camelize from  'camelize';

export const restaurantsRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject('not found')
        }
       
        resolve(mock);
    
    });
};

export const restaurantsTrasnfrom =  ({results =[] }) =>{
    console.log(results)
    const mappedResults = 
    results.map((a) =>{
      a.photos =  a.photos.map(b =>{
         return mockImages[Math.ceil(Math.random() *mockImages.length -1)]
        })
     return {
         ...a,
         isOpenNow:a.opening_hours && a.opening_hours.open_now,
         isClosedTemporarily:a.bussines_status === "CLOSED_TEMPORARILY"
     }
    });
    console.log(mappedResults)
    return camelize(mappedResults)
}
