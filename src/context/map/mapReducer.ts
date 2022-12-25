import { MapSate } from './MapProvider';
import { Map } from 'mapbox-gl';

type MapAction = { type:'setMap', payload:Map }


export const mapReducer = (state:MapSate, action:MapAction):MapSate => {

    switch (action.type) {
        // case value:
            
        //     break;
    
        default:
          return state;
 
}
}