import { Modal, Paper, } from '@mui/material'
import React from 'react'
import {makeStyles} from "@mui/styles"
import { Button, Typography } from '@material-ui/core'
import { Stack } from '@mui/system'
import axios from "axios"
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

function popup({open,setopen,index,collection, 
      setcollection,setdata,i,   cardData,
      settryagain,
      setdeleted
    }) {

    let classes=usestyles()
    
    function deleteItem(){
        let demo=[...collection]
        let democarddata=[...cardData]
        console.log(demo.splice(index,1))
        console.log(democarddata.splice(i,1))
     
        console.log(index)
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
>
<Typography>do you want delete this ?</Typography>
<Stack
direction={"row"}
height={50}
alignItems="flex-end"
justifyContent={"flex-end"}
width="85%"
spacing={1}
>
<Button
onClick={deleteItem}
>
        yes
    </Button>
    <Button
    onClick={cancel}
    >
       cancel
    </Button>

</Stack>
</Paper>

</Modal>
  )
}

export default popup