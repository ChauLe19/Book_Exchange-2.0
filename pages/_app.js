// import App from 'next/app'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from "../components/NavBar"
import './index.css'
import { CssBaseline } from '@material-ui/core';
import React, { useState } from 'react';
import { useReducer } from "react";
// import {light, darkTheme, lightTheme} from '../components/NavBar'

function useToggle(initialValue = false){

  // Returns the tuple [state, dispatch]

  // Normally with useReducer you pass a value to dispatch to indicate what action to

  // take on the state, but in this case there's only one action.

  return useReducer((state) => !state, initialValue);

}



function MyApp({ Component, pageProps }) {
  const [isOn, toggleIsOn] = useToggle();

  const theme = createMuiTheme({
    typography: {
      button: {
        textTransform: 'none',
      }
    },
    palette: {
      type: isOn ? "dark" : "light",
    },
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar toggleTheme = {toggleIsOn}/>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp