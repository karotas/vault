import {
  Button,
  Grid,
  Snackbar,
  Alert,
  TextField,
  Backdrop,
  CircularProgress,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Context } from "./Apps";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
function Login() {
  let [loader, setloader] = useState(false);
  let [incorrectLogin, setIncorrectLogin] = useState(false);
  let navigate = useNavigate();
  let { setdarktheme, setUsername } = useContext(Context);
  document.body.style.backgroundColor = "#fff";
  setdarktheme(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let user = JSON.parse(localStorage.getItem?.("users")) || [
      {
        username: "tomy",
        password: "123456",
      },
    ];
    setloader(true);
    user.forEach((item) => {
      if (data.username == item.username && data.password == item.password) {
        setUsername(item.username);
        setTimeout(() => {
          setloader(false);
          navigate("/");
        }, 2000);
        return;
      }
      setTimeout(() => {
        setloader(false);
        setIncorrectLogin(true);
      }, 2000);
    });
  };

  let [showpassword, setshowpassword] = useState(false);
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid sm={7} xs={11} md={5}>
          <Typography variant="h5" gutterBottom align="center" mb={2}>
            login
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            style={{
              width: "100%",
              paddingBottom: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              error={errors?.username}
              {...register("username", { required: true })}
              variant="standard"
              color="dark"
              label="username"
              sx={{
                width: "70%",
                marginBottom: 3,
                mt: 1,
                color: "red",
              }}
            />
            <TextField
              {...register("password", { required: true })}
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    onClick={() => setshowpassword(!showpassword)}
                    component={"div"}
                    sx={{
                      cursor: "pointer",
                    }}
                    position="start"
                  >
                    {showpassword ? (
                      <VisibilityIcon fontSize="medium" color="dark" />
                    ) : (
                      <VisibilityOffIcon fontSize="medium" color="dark" />
                    )}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              error={errors?.password}
              color="dark"
              label="password"
              sx={{
                width: "70%",
                marginBottom: 3,
                mt: 1,
              }}
              type={showpassword ? "text" : "password"}
            />
            <Button
              variant="contained"
              type="submit"
              color="dark"
              sx={{
                width: "70%",
                marginBottom: 2,
                mt: 2,
                height: 40,
                color: "#fff",
                borderRadius: 2,
              }}
            >
              login
            </Button>
            <Link to="/user/register">already have an account ?</Link>
          </form>
          <Backdrop open={loader} invisible>
            <CircularProgress color="secondary" />
          </Backdrop>
        </Grid>
      </Grid>
      <Snackbar
        autoHideDuration={2000}
        onClose={(_, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setIncorrectLogin(false);
        }}
        open={incorrectLogin}
      >
        <Alert
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
          color="error"
          variant="filled"
          icon={<WarningAmberIcon />}
          action={
            <Button
              color="error"
              sx={{
                minWidth: "auto",
                width: "auto",
              }}
              onClick={() => setIncorrectLogin(false)}
            >
              <CloseIcon
                fontSize="small"
                sx={{
                  fill: "#fff",
                  top: -3,
                  position: "relative",
                }}
              />
            </Button>
          }
        >
          username and password are incorrect
        </Alert>
      </Snackbar>
    </>
  );
}

export default Login;
