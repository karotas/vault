import {
  Skeleton,
  Grid,
  CardMedia,
  ImageListItemBar,
  Pagination,
  Button,
  Tooltip,
  Box,
  Snackbar, Typography ,
  PaginationItem,
  Alert
} from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import React from "react";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {  ImageListItem, } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from "@mui/system";
import { useContext } from "react";
import { Context } from "./Apps";
import Popup from "./popup"
let useStyles = makeStyles({
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 10,
    "&:hover  .popup": {
      display: "none",
    },
  },
  popup: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 50,
  },
  card: {
    height: 200,
    width: "100%",
    listStyle: "none",
    transition: "500ms",

    "&:hover": {
      scale: 1.05,
    },
  },
});

function Cards() {
  let classes = useStyles();
  

  let {
    darktheme,
    
  }=useContext(Context)
  let [collection, setCollection] = useState([]);
  let [cardData, setCardData] = useState([]);
  let [skeleton, setskeleton] = useState(false);
  let [page, setpage] = useState([0,10]);
  let [index, setindex] = useState(0);
  let [openDelete,setOpenDelete]=useState(false)
  let[deleted,setdeleted]=useState(false)
  let[tryagain,settryagain]=useState(false)
  document.body.style.backgroundColor=darktheme?"#434242":"#fff"

  useEffect(() => {
    let url="http://localhost:5000/user/data"
   url="http://192.168.29.126:5000/user/data"
    axios({
      method: "get",
      url: url,
      // url:"https://picsum.photos/v2/list"
    })
      .then((res) => {
        setCollection(res.data);
        setCardData(res.data.slice(0, 10));

        setTimeout(() => {
          setskeleton(true);
        }, 1000);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
   <Box
   component={"div"}
   bgcolor={darktheme?"dark.main":"light.main"}

 height={"100%"}

   >
   <Grid container gap={2}  justifyContent="center" pb={1}>
        {cardData.map((item,i) => (
          <Grid item md={3.5} lg={2} sm={3} xs={11} pt={1}>
            <ImageListItem className={classes.card}>
              {skeleton ? (
                <>
                  <CardMedia
                    component={"img"}
                    // src={item.url}
                    src={item.download_url}
                    className={classes.img}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title="author"
                    className={classes.popup}
                    subtitle={item.author}
                    actionIcon={
                      <Button
                      onClick={()=>{
             
                        setOpenDelete(true)
                  setindex(i)
                      }}
                      sx={{
                        cursor:"pointer"
                      }}
                      >
                        <Tooltip
                         title="delete"  placement="right">
                          <DeleteIcon

                            sx={{
                              color: "#fff",
                            }}
                          />
                        </Tooltip>
                      </Button>
                    }
                  />
                </>
              ) : (
                <Skeleton
                  className={classes.img}
                  height={200}
                  animation="wave"
                  variant="rounded"
                />
              )}
            </ImageListItem>
          </Grid>
        ))}
      </Grid>

      <Stack mt={3}
      bgcolor={darktheme?"dark.main":"light.main"}
    
      alignItems="center" mb={2}>
        <Pagination
          count={Math.ceil(collection.length / 10)}
          onChange={(_, v) => {
            let demo = [...collection];

            demo = demo.slice(v * 10 - 10, v * 10);
            setCardData(demo);
            console.log(demo);
          setpage([v * 10 - 10, v * 10])
            console.log(v * 10 - 10, v * 10);
            demo = [];
          }}
          defaultPage={1}
          showLastButton
          showFirstButton
          size="medium"
color={darktheme?'primary':"standard"}
renderItem={(item) => (
    <PaginationItem
     sx={{
        color:darktheme?"light.main":"dark.main"
     }}
      {...item}
    />
  )}
      
        />
      </Stack>
   </Box>
   <Popup
open={openDelete}
  setopen={setOpenDelete}
   setcollection={setCollection}
   setdata={setCardData}
   index={index+page[0]}
   i={index}
   cardData={cardData}
   collection={collection}
   setdeleted={setdeleted}
   settryagain={settryagain}
   />
   <Snackbar
   open={deleted}
   >
    <Alert
    
    sx={{
      width:200
    }}
    >
<Typography
color={"green"}
>successfully deleted</Typography>
    </Alert>
   </Snackbar>
   <Snackbar
   open={tryagain}
   >
    <Alert
      sx={{
        width:200
      }}
      color="error"
     icon={<ReplayIcon color="error"/>}
    >
<Typography
sx={{
  color:"error.main"
}}
>try again</Typography>
    </Alert>
   </Snackbar>
    </>
  );
}

export default Cards;
