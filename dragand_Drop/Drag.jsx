import { Box, Button,CircularProgress, Modal,Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useCallback, useContext, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadIcon from '@mui/icons-material/Upload';
import FolderIcon from '@mui/icons-material/Folder';
// import 'react-image-crop/dist/ReactCrop.css'
import { useState } from 'react';
import { useForm } from "react-hook-form";

import Alert from './Alert';
import Crop from "./cropImage"
import Loader from './Loader';
import { Context } from '../Apps';

import { useNavigate } from "react-router-dom";


function MyDropzone() {
  let {
    darktheme,
    setshowloader
    
  }=useContext(Context)
 
  let [src, setSrc] = useState("")
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log(uploaded)
    if(uploaded){
   setDontGetData(false)
   setshowloader(true)
   setTimeout(() => {
 setshowloader(false)
    navigate("/")
   }, 2000);
   return

    }
    setDontGetData(true)
  };
   const [zoom, setZoom] = useState(1)
  let [Dialogopen,setDialogeopen]=useState(false)
  let [dontGetData,setDontGetData]=useState(false)
  let [uploaded,setuploaded]=useState(false)
  let [open, setOpen] = useState(false)
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result

        setSrc(binaryStr)
      }
      let src = reader.readAsDataURL(file)
    })

  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
let [color,setcolor]=useState(darktheme?"#434242":"#fff")
  return (
    <Stack
      direction={"column"}
      alignItems="center"
  
      height="100vh"
      bgcolor={darktheme?"#434242":"#fff"}

    >
      <Grid
      container
      justifyContent={"center"}

      >
        <Grid
        item
        sm={9}
        xs={11}
        >

        <form
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      style={{
        width:"100%",
        minWidth:400,
        display:"flex",
    alignItems:"center",
        flexDirection:"column"
 
  
      }}
      
      >
        <TextField


        
   {...register("author",{required:true})}  
        placeholder="author"
        color={darktheme?"light":"dark"}
        sx={{
          mt:1,
          width:{
            xs:"70%",
            sm:"70%",
            md:"30%",
      
          },
         
  
 
       
          ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input":{
color:darktheme?"light.main":"dark.main",
height:35,

          }
  
        }}
        error={errors.author}

        />
     <TextField
          color={darktheme?"light":"dark"}
   {...register("discription",{required:true})} 
        sx={{
          mt:1,
          mb:1,
          width:{
            xs:"70%",
            sm:"70%",
            md:"30%"
          },
          ".css-15jyvda-MuiInputBase-root-MuiOutlinedInput-root":{
            color:darktheme?"light.main":"dark.main",}

        }}
        placeholder="discription"
        multiline
        rows={4}
        error={errors.discription}
        />

      <Stack
      width={{    
        xs:"70%",
        sm:"70%",
        md:"30%"
    }}
     
      >
      <Button
        
        type="button"
        variant="contained"
        color={dontGetData?"error":'dark'}
        onClick={() => setOpen(true)}
        endIcon={<UploadIcon />}
        sx={{
          color:"#fff",
          width:{
            xs:'40%',
            sm:"30%",
            md:150,
        
          backgroundColor:darktheme?"dark.main":"light.main"
          },
          height:30
        }}
      >
        upload
      </Button>
      </Stack>
      <Stack
      width={{    
        xs:"70%",
        sm:"70%",
        md:"30%"
    }}
     
      >
      <Button
        variant="contained"
        color='dark'
       type="submit"
    
        sx={{
          color:"#fff",
          width:{
            xs:'100%',
            sm:"100%",
            md:"100%",

            
          },
          height:40,
          mt:2,
          borderRadius:2,
         
  
        }}
      >
      submit
 
      </Button>
      </Stack>



      </form>
        </Grid>
      </Grid>
 
      <Modal
        open={open}
        onClose={()=>{
          if(src!==""){
            setDialogeopen(true)
            return
          }
          setOpen(false)
        }}
        sx={{
          alignItems:"center",
          justifyContent:"center",
          display:"center",
       
      
        }}
      >
   
          <Paper
            elevation={6}

            sx={{
              height: {
                xs:"60%",
                sm:"80%",
                md:"90%",
              },
              width: "90%",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              flexDirection:"column",
              backgroundColor:darktheme?"dark.main":"light.main",
       
             
              pt: 0
            }}
          >
          {
            src==""?  <Box {...getRootProps()}
            width="90%"
            height="85%"
            position={"relative"}
            top="-16px"
            border= "4px dashed #ddd"
            mt={0}
            sx={{

            }}
          >
            <input  {...getInputProps({
              accept:".jpg"
            })} />
            {
      
                isDragActive ?
                  null :
               <>
               <Typography
    color={!darktheme?"darm.main":"light.main"}

               sx={{
         width:"100%",
         textTransform:"capitalize",
         textAlign:"center",                                              
         my:4,
         letterSpacing:1                                                      
               }}
               variant="h2"
               
               >drag & drop</Typography>
               
               <FolderIcon
                    size="large"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      height: 70,
                      width: 70,
                      color:!darktheme?"darm.main":"light.main"

                    }}
                  /> 

               </>
            }

          </Box>:<Box
          
          width="90%"
          height="85%"
          position={"relative"}
          top="-16px"
    
          mt={0}
          >
            <TextField
            id="file"
            type="file"
            onChange={(e)=>{
              let file=e.target.files[0]
              const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
 console.log(binaryStr)
 setSrc(binaryStr)
 setZoom(1)
   
      }
      let src = reader.readAsDataURL(file)
      
            }}
            sx={{
              display:"none"
            }}
            />
    
      
          {/* <CardMedia
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    height: "90%",
                    width: "90%",
                    color: "primary.main",
                    objectFit:"cover",
                    objectPosition:"center",
         

                  }}
                  component={"img"}
                  src={src}

                /> */}
<Crop
src={src}
setSrc={setSrc}
zoom={zoom}
setZoom={setZoom}
setuploaded={setuploaded}
setOpen={setOpen}
/>
          </Box>
          }
        <Stack
        width={"90%"}
        justifyContent="space-between"
        alignItems={"flex-start"}
        direction="row"
    
        >
        {
   
    
    src!=""&&<>
    <Button
    variant={darktheme?"contained":"text"}
        color="warning"
            onClick={()=>
            {
              let file=document.querySelector("#file")
        file.click()
   
      
            }}
            
            >change file</Button>
    </>

        }
        </Stack>
          </Paper>

      </Modal>
    
      <Alert src={src} Dialogopen={Dialogopen} setSrc={setSrc} setDialogeopen={setDialogeopen} setOpen={setOpen}/>
    </Stack>
  )
}
export default MyDropzone