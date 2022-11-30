import { Button,  Grid, TextField, Backdrop, CircularProgress , Typography, InputAdornment} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useForm } from "react-hook-form";

function Register() {
let [passmatch,setpassmatch]=useState(false)
let [loader,setloader]=useState(false)
let [showpassword,setshowpassword]=useState({
    password:false,
    confirmpassword:false
})
const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => {
    if(data.confirm_password
!==data.password        ){
    setpassmatch(true)
    return
}
setpassmatch(false)
setloader(true)
setTimeout(()=>{
    setloader(false)
},2000)
};
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
 
        mb={2}
        align="center"
        >register</Typography>
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
{...register("username",{required:true})}
    variant='standard'
    color="dark"
    label="username"
    error={errors.username}
    sx={   {
        width:"70%",
        marginBottom:3,
        mt:1,
        color:"red"
    }}

    />
        <TextField
        {...register("password",{required:true,minLength:6})}
        error={errors.password}
        type={showpassword.password?"text":"password"}
        helperText={errors?.password?.type === "minLength"?
        <Typography
        color="error"
        variant="subtitle2"
        >
            password mustbe morethan 6 letters
        </Typography>
        
        :""}
        InputProps={{
            endAdornment: (
                  <InputAdornment
                  onClick={()=>setshowpassword({
                    ...showpassword,
                    password:!showpassword.password
                  })}
                  component={"div"}
                  sx={{
                    cursor:"pointer"
                  }}
                  position="start">
             {
                showpassword.password?     <VisibilityIcon
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
    color="dark"
    label="password"
    sx={{
        width:"70%",
        marginBottom:3,
        mt:1,
 
 
   
     
     
    }}

    />
     <TextField
     {...register("confirm_password", { required: true})}
        InputProps={{
            endAdornment: (
                  <InputAdornment
                  onClick={()=>setshowpassword({
                    ...showpassword,
                 confirmpassword:!showpassword.confirmpassword
                  })}
                  component={"div"}
                  sx={{
                    cursor:"pointer"
                  }}
                  position="start">
             {
                showpassword.confirmpassword?     <VisibilityIcon
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
    color="dark"
    label="confirm password"
    helperText={passmatch ?
    <Typography
    color="error"
    variant="subtitle2"
    >
        password does'nt match
    </Typography>
    
    :""}
    sx={{
        width:"70%",
        marginBottom:3,
        mt:1,
 
 
   
     
     
    }}
    type={showpassword.confirmpassword?"text":"password"}
    error={errors.confirm_password||passmatch}

    />
    <Button
    type="submit"
    variant="contained"
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
    register
    </Button>
    <Link
    to="/user/login"
    >already have an account ?</Link>
</form>

    </Grid>
    <Backdrop
open={loader}
invisible


>
    <CircularProgress
    color="dark"
    />

</Backdrop>
</Grid>

  )
}

export default Register