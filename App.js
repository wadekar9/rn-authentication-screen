import React from 'react';
import { useFonts } from 'expo-font';
import RootNavigation from './src/Navigation/RootNavigation';

const App = () => {

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./src/Assets/Fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('./src/Assets/Fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./src/Assets/Fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Medium': require('./src/Assets/Fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./src/Assets/Fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./src/Assets/Fonts/Poppins-SemiBold.ttf'),
  });

  if(!fontsLoaded) return null;

  return (
    <RootNavigation />
  )
}

export default App
