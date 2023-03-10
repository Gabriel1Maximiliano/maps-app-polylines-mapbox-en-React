import { Map } from 'mapbox-gl';
import { useReducer } from 'react';
import { MapContext,  } from './MapContext';
import { mapReducer } from './mapReducer';
export interface MapSate {
    isMapReady: boolean;
    map?: Map
}
const INITIAL_STATE: MapSate = {
    isMapReady:false,
    map:undefined

}
interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({children}:Props) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE)
  return (
    <MapContext.Provider value={{
        ...state,
    }}>
{children}
    </MapContext.Provider>
  )
}
