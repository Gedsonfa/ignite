import 'react-native-gesture-handler';
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from "./src/global/styles/theme";

import { Register } from "./src/screens/Register";
import { CategorySelect } from "./src/screens/CategorySelect";
import { Dashboard } from "./src/screens/Dashboard";

export default function App(){
  const [fontsLoaded] = useFonts({
     Poppins_400Regular,
     Poppins_500Medium,
     Poppins_700Bold
  });

  if (!fontsLoaded) {
  return null;
  }


  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}