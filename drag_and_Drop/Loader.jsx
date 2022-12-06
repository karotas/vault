
import { CircularProgress } from '@material-ui/core'
import { Backdrop } from '@mui/material'
import React,{useContext} from 'react'
import { Context } from '../Apps'
function Loader() {
  let { showloader,setshowloader}=useContext(Context)
  return (
<Backdrop
open={showloader}
invisible
>
<CircularProgress
color={"dark"}
/>
    
</Backdrop>
  )
}

export default Loader