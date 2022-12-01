import React, { useContext } from 'react'
import { Button, Dialog,  Paper, Stack, Typography } from '@mui/material'
import { Context } from '../Apps'



function Alert({setOpen,src,Dialogopen,setSrc,setDialogeopen}) {
let {darktheme}=useContext(Context)
function deletes(){
    setOpen(false)
    setDialogeopen(false)
    setSrc("")
}
function cancel(){
    setOpen(true)
    setDialogeopen(false)
}
  return (
<Dialog
open={Dialogopen}


>
    <Paper
    sx={{
        width:300,
        height:100,
        bgcolor:darktheme?"dark.main":"light.main"
    }}
    >
        
    <Typography
textAlign={"center"}
gutterBottom
mt={1}
textTransform="capitalize"
sx={{
    color:darktheme?"light.main":"dark.main"
}}
    >do you want close this ?</Typography>
    <Stack
    direction="row"
    mt={2}
    justifyContent="flex-end"
    pr={1}
    spacing={1}  >

        <Button
        onClick={deletes}
        color={darktheme?"light":"primary"}
        >yes</Button>
        <Button
               color={darktheme?"light":"primary"}
        onClick={cancel}
        >cancel</Button>
    </Stack>
    </Paper>

</Dialog>
  )
}

export default Alert