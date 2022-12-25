import { PlacesState } from './PlacesProvider';

type PlacesAction = {
    type:'setUSerLocation', payload:[number,number]
}

export const PlacesReducer = (state: PlacesState, action:PlacesAction):PlacesState => {
switch (action.type) {
    case 'setUSerLocation':
       
        return {
            ...state,
            isLoading:false,
            userLocation: action.payload
        }
        break;

    default:
        return state;
}
 
}
