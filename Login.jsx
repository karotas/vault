import { Button,  Grid, TextField, Backdrop, CircularProgress, Typography, InputAdornment} from '@mui/material'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Context } from './Apps';
import {useContext } from 'react';
import {useNavigate} from "react-router-dom"
function Login() {
    let [loader,setloader]=useState(false)
    let navigate=useNavigate()
    let {  
        setdarktheme}=useContext(Context)
        document.body.style.backgroundColor="#fff"
        setdarktheme(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setloader(true)
        setTimeout(() => {
            setloader(false)
            navigate("/")
        }, 2000);
    };
   
let [showpassword,setshowpassword]=useState(false)
  return (

   
<Grid
container
justifyContent={"center"}

>
    <Grid
    sm={7}
    xs={11}
    md={5}
  
   
    >
        <Typography
        
        variant="h5"
        gutterBottom
 align='center'
        mb={2}
        >login</Typography>
    <form
    onSubmit={handleSubmit(onSubmit)}
    autoComplete='off'
    style={{
        width:"100%",
        paddingBottom:2,
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      
    }}

    >
    <TextField
        error={errors?.username}
{...register('username', { required: true})}
    variant='standard'
    color="dark"
    label="username"
    sx={   {
        width:"70%",
        marginBottom:3,
        mt:1,
        color:"red"
    }}

    />
        <TextField
    
        {...register('password', { required: true})}
        InputProps={{
            endAdornment: (
                  <InputAdornment
                  onClick={()=>setshowpassword(!showpassword)}
                  component={"div"}
                  sx={{
                    cursor:"pointer"
                  }}
                  position="start">
             {
                showpassword?     <VisibilityIcon
                fontSize='medium'
                color='dark'
                />:<VisibilityOffIcon
                fontSize='medium'
                color='dark'
                />
             }
                  </InputAdornment>
                ),
              }}
    variant='standard'
    error={errors?.password}
    color="dark"
    label="password"
    sx={{
        width:"70%",
        marginBottom:3,
        mt:1,
 
 
   
     
     
    }}
type={showpassword?"text":"password"}
    />
    <Button
    variant="contained"
    type="submit"
    color="dark"
        sx={{
            width:"70%",
            marginBottom:2,
            mt:2,
            height:40,
            color:"#fff",
    borderRadius:2

        }}
    >
        login
    </Button>
    <Link
    to="/user/register"
    >already have an account ?</Link>
</form>
<Backdrop
open={loader}
invisible


>
    <CircularProgress
    color="secondary"
    />

</Backdrop>
    </Grid>
 
</Grid>

  )
}

export default Login