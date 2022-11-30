import React, { useContext } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  Button,
  Drawer as Dr,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Switch,
  Typography,
  FormControlLabel
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";

import PersonIcon from "@mui/icons-material/Person";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LogoutIcon from "@mui/icons-material/Logout";
import { Context } from "./Apps";


function Drawer({ open, setopen }) {

  let {
    darktheme,
    setdarktheme
  }=useContext(Context)
  return (
    <>
      <Dr anchor="left" open={open} onClose={() => setopen(false)}>
        <List
        
          sx={{
            width: 300,
            height:"100%",
            backgroundColor:darktheme?"dark.main":"light.main"
          }}
        >
          <ListItem>
            <Stack
              direction={"row"}
              alignItems="center"
              height={60}
              spacing={1}
              mb={1}
            >
              <Avatar
                src="./assets/vault.png"
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
              <Typography
              sx={{
                 color:!darktheme?"dark.main":"light.main",
              }}
              >tomy</Typography>
            </Stack>
            <Stack
              direction={"row"}
              alignItems="center"
              flex={1}
              justifyContent="flex-end"
              pr={2}
            >
             <FormControlLabel
             control={<>
       <Switch
           color={!darktheme?"dark":"light"}
                checked={darktheme}
                onChange={() => setdarktheme(!darktheme)}
              />
              {darktheme ? <Brightness2Icon sx={{

               fill:"#fff"
              }}/> : <WbSunnyIcon />}
             </>}
             
             
             
             />
              <Button
                onClick={() => setopen(false)}
                sx={{
                  position: "absolute",
                  top: -4,
                  right: 3,
                  minWidth: "auto",
                  width: 30,
                  borderRadius: "50%",
                }}
              >
                <CloseIcon color="error" />
              </Button>
            </Stack>
          </ListItem>
          <ListItem
               sx={{
                color:!darktheme?"dark.main":"light.main",
              }}
          >
            <ListItemButton
              sx={{
                borderRadius: 5,
              }}
            >
              <SettingsIcon
         
                sx={{
                  mr: 1,
                  color:darktheme?"light.main":"dark.main"
                }}
              />

              <ListItemText>settings</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem
                sx={{
                    color:!darktheme?"dark.main":"light.main",
                  }}
              >
          
            <ListItemButton
              sx={{
                borderRadius: 5,
              }}
            >
              <PersonIcon
            
                sx={{
                    mr: 1,
                    color:darktheme?"light.main":"dark.main"
                  }}
              />

              <ListItemText
              
              >account</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem
          
          sx={{
            color:!darktheme?"dark.main":"light.main",
          }}
      
          >
            <ListItemButton
              sx={{
                borderRadius: 5,
              }}
            >
              <LiveHelpIcon
      
                sx={{
                    mr: 1,
                    color:darktheme?"light.main":"dark.main"
                  }}
              />

              <ListItemText>faq</ListItemText>
            </ListItemButton>
          </ListItem>
          <Button
            color={darktheme?"dark":"light"}
            sx={{
              mt: 2,
              ml: 2,
              borderRadius: 5,
              width: 120,
              height: 40,
              color:!darktheme?"dark.main":"light.main"
            }}
            endIcon={<LogoutIcon />}
          >
            logout
          </Button>
        </List>
      </Dr>
    </>
  );
}

export default Drawer;
