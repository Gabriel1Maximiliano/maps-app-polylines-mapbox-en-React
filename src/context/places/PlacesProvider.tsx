import { useEffect, useReducer } from "react";
import { getuserLocation } from "../helpers/getuserLocation";
import { PlacesContext } from "./PlacesContext";
import { PlacesReducer } from "./PlacesReducer";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number,number];
}
const INITIAL_STATE: PlacesState={
    isLoading:true,
    userLocation:undefined
}
export interface Props{
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children}:Props) => {

    const [state, dispatch] = useReducer(PlacesReducer, INITIAL_STATE)
    useEffect(() => {
        
        getuserLocation().then( lngLat=>dispatch({type: 'setUSerLocation', payload:lngLat}) )
  
}, [])

  return (
    <PlacesContext.Provider value={{
       ...state,
       

    }} >
        {children}
    </PlacesContext.Provider>
  )
}
