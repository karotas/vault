import { Modal, Paper, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import {makeStyles} from "@mui/styles"

import { Stack } from '@mui/system'
import axios from "axios"
import { Context } from './Apps'
let usestyles=makeStyles({
    paper:{
width:250,
height:"auto",
display:"flex",
alignItems:"center",
flexDirection:"column",
justifyContent:"center",
border:"none",
outline:"none",
padding:"10px 0"


    }
})

function Popup({open,setopen,index,collection, 
      setcollection,setdata,i,   cardData,
      settryagain,
      setdeleted
    }) {

    let classes=usestyles()
    let {darktheme}=useContext(Context)
    function deleteItem(){
            

        let demo=[...collection]
        let democarddata=[...cardData]
        console.log(demo.splice(index,1))
        console.log(democarddata.splice(i,1))
 
   let url="http://localhost:5000/user/update"
   url="http://192.168.29.126:5000/user/update"  

axios({
    method:"post",
    url:url,
    data:{
        data:demo
    }
}).then(res=>{
    console.log(res.data)
    if(res.data.success){
        setcollection(demo)
        setdata(democarddata)
        setopen(false)
        setdeleted(true)
        setTimeout(() => {
            setdeleted(false)
        }, 3000);
        return
    }
    settryagain(true)
    setopen(false)
    setTimeout(() => {
        settryagain(false)
    }, 4000);
}).catch(err=>{
    settryagain(true)
})




    }
    function cancel(){
        setopen(false)
    }
  return (
<Modal
hideBackdrop


open={open}
sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}}
>
<Paper
elevation={6}
className={classes.paper}
sx={{
    backgroundColor:darktheme?"dark.main":"light.main"
}}
>
<Typography

color={darktheme?"light.main":"dark.main"}
>do you want delete this ?</Typography>
<Stack
direction={"row"}
height={50}
alignItems="flex-end"
justifyContent={"flex-end"}
width="85%"
spacing={1}
>
<Button
color={darktheme?"light":"primary"}
onClick={deleteItem}
>
        yes
    </Button>
    <Button
    color={darktheme?"light":"primary"}
    onClick={cancel}
    >
       cancel
    </Button>

</Stack>
</Paper>

</Modal>
  )
}

export default Popup