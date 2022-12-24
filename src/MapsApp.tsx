import { PlacesProvider } from "./context/places"
import { HomeScreen } from './screens/HomeScreen';

import './index.css'

export const MapsApp = () => {
  return (
    <PlacesProvider>
    <HomeScreen/>
    </PlacesProvider>
  )
}
