import { createTheme, ThemeProvider } from "@mui/material";
import React,{ createContext }  from "react";
import { useState } from "react";

import Cards from "./Cards";
import Nav from "./Nav";
export let Context=createContext()
function Apps() {
  document.title="Vault"
  let value=createTheme({
    palette:{
      dark:{
        main:"#434242"
      },
      light:{
        main:"#fff"
      }
    }
  })
  let [darktheme,setdarktheme]=useState(true)
  return (
    <>
    <Context.Provider
    
    value={{
      darktheme,
      setdarktheme
    }}
    >
    <ThemeProvider
    theme={value}
    >
    <Nav />
      <Cards />
    </ThemeProvider>
    </Context.Provider>

   
    </>
  );
}

export default Apps;
