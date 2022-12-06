import { Button, CardMedia, Modal, Paper, Snackbar, Stack } from '@mui/material'
import React, { useContext } from 'react'
import UpgradeIcon from '@mui/icons-material/Upgrade';

import CloseIcon from '@mui/icons-material/Close';
import Alert from './Alert';
import { useState } from 'react';
import {Alert as Alerts} from "@mui/material"
import { Context } from '../Apps';

function ChildModel({ childOpen, src, setChildOpen, setuploaded,setOpen }) {
    let [childalert, setchildalert] = useState(false)
    let [uploadSuccess, setUploadSucesss] = useState(false)
    let {darktheme}=useContext(Context)
    return (
        <Modal
            open={childOpen}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <Stack
                alignItems={"center"}
                position="relative"
                width="90%"
                height={"90%"}
                bgcolor={darktheme?"dark.main":"light.main"}
                borderRadius={1}

            >
                <Button
                    color="error"
                    sx={{
                        position: "absolute",
                        right: 10,
                        top: 5,
                        minWidth: "auto",
                        borderRadius: "50%"
                    }}
                    onClick={() => {
                        if(uploadSuccess){
                            setChildOpen(false)
                            setuploaded(true)
                            setOpen(false)
                            return
                        }
                        setchildalert(true)
                    }}
                >

                    <CloseIcon />
                </Button>

                <CardMedia

                    component={"img"}
                    sx={{
                        width: "80%",
                        height: "80%",
                        mt: 6
                    }}
                    src={src}

                />
                <Button
                    sx={{
                        mt: 2,
                        width: 150
                    }}
                    color='success'
                    variant='contained'
                    endIcon={<UpgradeIcon
                    />}
         onClick={()=>{
            setUploadSucesss(true)
            setuploaded(true)
            setTimeout(() => {
                setUploadSucesss(false)
                setChildOpen(false)
                setuploaded(true)
                setOpen(false)
            }, 3000);
         }} 
                >
                    upload
                </Button>
                <Alert
                    setDialogeopen={setchildalert}
                    Dialogopen={childalert}
                    setOpen={setChildOpen}
                    setSrc={() => { }}
                   

                />
                <Snackbar
open={uploadSuccess}
autoHideDuration={2000}

>
<Alerts
variant='filled'
color="success"
sx={{
    height:"100%",
    width:200,
    textTransform:"capitalize",
    letterSpacing:0.7
}}
>
successfully uploaded
</Alerts>

</Snackbar>
            </Stack>


        </Modal>
    )
}

export default ChildModel