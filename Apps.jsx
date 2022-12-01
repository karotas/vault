import { createTheme, ThemeProvider } from "@mui/material";
import React,{ createContext }  from "react";
import { useState } from "react";
import {BrowserRouter as Br ,Route,Routes} from "react-router-dom"
import Cards from "./Cards";
import Login from "./Login";
import Nav from "./Nav";
import Register from "./Register";
import APPS from "./dragand_Drop/Apps"
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
  let [darktheme,setdarktheme]=useState(false)
  let [showloader,setshowloader]=useState(false)
  return (
    <>
    
    <Context.Provider
    
    value={{
      darktheme,
      setdarktheme,
      showloader,setshowloader
    }}
    >
    <ThemeProvider
    theme={value}
    >
      <Br>
      <Routes>
     
        <Route path="/" element={<>
        <Nav
        open={true}
        />
          <Cards />
        </>}/>
        <Route path="/user/login" element={<>
        <Nav
        open={false}
        
        />
       <Login/>
        </>}/>
        <Route path="/user/register" element={<>
        <Nav
        open={false}
        
        />
   <Register/>
        </>}/>
        <Route path="/user/upload" element={<>
        <Nav
        open={true}
        
        />
  <APPS/>
        </>}/>
      </Routes>
   
      
      </Br>

      
    </ThemeProvider>
    </Context.Provider>

   
    </>
  );
}

export default Apps;
