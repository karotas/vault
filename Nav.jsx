import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./Drawer";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "./Apps";
import { Link } from "react-router-dom";
import Loader from "./dragand_Drop/Loader";

function Nav({open}) {
    let {
        darktheme,
        
      }=useContext(Context)
      useEffect(()=>{
if(open){
  setDrawerOpen(false)
  
}
      },[])
 
  let [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          border: "none",

          flexDirection: "row",
        }}
        position="sticky"
        variant="outlined"
        color={darktheme?"dark":"light"}
      >
        <Toolbar>
        {
          open&&  <IconButton   color={!darktheme?"dark":"light"} onClick={() => setDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        }
          <Typography variant="h5"
          
       sx={{
        color:!darktheme?"dark.main":"light.main",
       }}
          >vault</Typography>
        </Toolbar>
      {
        open&&  <Stack
        flex={1}
        flexDirection="row"
        alignItems={"center"}
        justifyContent="flex-end"
      >
        <Link
        to="/"
        style={{
          all:"initial"
        }}
        >
          <Button
          variant="text"
          color={!darktheme?"dark":"light"}
          sx={{
            height: 35,
            minWidth: "auto",
            width: 100,
            mr: 2,
            color:!darktheme?"dark":"light",
            borderRadius: 5,
          }}
        >
          home
        </Button>
        </Link>
        <Button
          variant="text"
          color={!darktheme?"dark":"light"}
          sx={{
            height: 35,
            minWidth: "auto",
            width: 100,
            mr: 4,
            color:!darktheme?"dark":"light",
            borderRadius: 5,
          }}
        >
         contact
        </Button>
      </Stack>
      }
      <Loader

      />
      </AppBar>
      {
        open&&<Drawer open={drawerOpen} setopen={setDrawerOpen} />
      }
    </>
  );
}

export default Nav;
