import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Avatar,
  Box,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  Typography,
  Button,
  FormHelperText
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.svg";
// import loginBg from "../../public/Frame.png";
import loginBg from "../assets/img/Frame.png";
// import backgroundImage from '../assets/img/Frame.png'; // Path relative to the JS/TSX file

import { useNavigate } from "react-router-dom";
import { usePatient } from "../store/patients";
import { Bounce, toast } from "react-toastify";

interface LoginFormInputs {
  email: string;
  password: string;
}

function Login() {
  const getUserEmail = usePatient((state) => state.getUserEmail);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = async (data: LoginFormInputs) => {
    // console.log("Form submitted:", data);
    const baseUrl = import.meta.env.VITE_BASE_URL;
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }
      });

      if (response.ok) {
        const result = await response.json();
        const email = result?.data?.user?.email;
        getUserEmail(email);
        toast.success("Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
        // console.log(email, "email out");
        // console.log(result.data, "result.data ");
        navigate("/dashboard", { replace: true });
        setIsLoading(false);
      } else {
        throw new Error("Unable to login");
      }
    } catch (err) {
      // console.log(err);
      setIsLoading(false);
      toast.error(`${err}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
      });
    }
  };

  return (
    <div
      className="login"
      //  style={{
      //       width: "100%",
      //       minHeight: "100vh",
      //       backgroundImage: `url(${loginBg})`,
      //       backgroundSize: "cover",
      //       backgroundPosition: "center",
      //       backgroundRepeat: "no-repeat",
      //       backgroundAttachment: "fixed",
      //     }}
      //
    >
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
          //   paddingX: 3,
        }}>
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: 480,
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
          <Avatar
            src={logo}
            variant="square"
            sx={{
              width: 100,
              height: 100,
              paddingBottom: 3
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              fontFamily: "Montserrat",
              color: "#1A1C1E",
              textAlign: "center",
              paddingBottom: 1
            }}>
            Login to iPrescribe Admin
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              fontFamily: "Montserrat",
              color: "#6C7278",
              textAlign: "center",
              paddingBottom: 2,
              paddingTop: 1
            }}>
            Provide the required details to login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            {/* Email Field */}
            <Box sx={{ paddingBottom: 2, paddingTop: 3 }}>
              <Typography
                sx={{
                  paddingBottom: 0.5,
                  fontFamily: "Montserrat",
                  color: "#616161",
                  fontSize: "14px",
                  fontWeight: 400
                }}>
                Email Address
              </Typography>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                disableUnderline
                sx={{
                  paddingX: 2,
                  fontFamily: "Montserrat",
                  fontSize: 14,
                  paddingY: 1,
                  border: 1,
                  borderRadius: "8px",
                  width: "100%",
                  borderColor: errors.email ? "#d32f2f" : "#9E9E9E"
                }}
                placeholder="e.g admin@careoneclinics.com"
              />
              {errors.email && (
                <FormHelperText sx={{ color: "#d32f2f", paddingTop: 0.5 }}>
                  {errors.email.message}
                </FormHelperText>
              )}
            </Box>

            {/* Password Field */}
            <Box sx={{ paddingBottom: 3 }}>
              <Typography
                sx={{
                  paddingBottom: 0.5,
                  fontFamily: "Montserrat",
                  color: "#616161",
                  fontSize: "14px",
                  fontWeight: 400
                }}>
                Password
              </Typography>
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                disableUnderline
                sx={{
                  paddingX: 2,
                  fontFamily: "Montserrat",
                  fontSize: 14,
                  paddingY: 1,
                  border: 1,
                  borderRadius: "8px",
                  width: "100%",
                  borderColor: errors.password ? "#d32f2f" : "#9E9E9E"
                }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.password && (
                <FormHelperText sx={{ color: "#d32f2f", paddingTop: 0.5 }}>
                  {errors.password.message}
                </FormHelperText>
              )}
            </Box>
            <Typography
              sx={{
                paddingBottom: 1,
                fontFamily: "Montserrat",
                color: "#6C7278",
                fontSize: "14px",
                fontWeight: 500,
                textAlign: "right"
              }}>
              Forgot password?
            </Typography>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "600",
                padding: "10px",
                textTransform: "none",
                backgroundColor: "#283C85",
                fontSize: 14,
                borderRadius: "9.95px"
              }}>
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default Login;
