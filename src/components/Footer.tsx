import { Badge, Box, Button, Divider, Input, Typography } from "@mui/material";
import { MailIcon } from "lucide-react";
import footerLogo from "../assets/footer-logo.svg";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import what from "../assets/what.png";
import { Bounce, toast } from "react-toastify";
import { useForm } from "react-hook-form";





type EmailForm = {
  email: string;
};
function Footer() {
 const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailForm>();

    const onSubmit = (data: EmailForm) => {
    console.log("Submitted email:", data.email);
    toast.success("Sent Successfully", {
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
  };
  
  return (
    <Box>
      <Box
        bgcolor={"#283C85"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        pb={9}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Onest",
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize:{
              xs: "38px",
              md: "48px",
            }, 
            py: 2
          }}>
          Join our Waitlist
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Onest",
            color: "#F5F5F5",
            fontWeight: 400,
            fontSize: "14px",
            py: 0.5,
                        textAlign: "center",
px: 2
          }}>
          Be the first one to know about discounts, offers and events weekly
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Onest",
            color: "#F5F5F5",
            fontWeight: 400,
            fontSize: "14px",
            pt: 0.5,
            pb: 5,
            textAlign: "center", px: 2
          }}>
          in your mailbox. Unsubscribe whenever you like with one click.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            width={{ xs: "100%", md: "100%" }}
            bgcolor="#DFDFE02B"
            display="flex"
            alignItems="center"
            border={1}
            borderColor="#FFFFFF1C"
            px={1}
            gap={2}
            py={0.5}
            borderRadius={50}>
            <Badge color="secondary" badgeContent={0}>
              <MailIcon color="#9A9EA6" />
            </Badge>

            <Input
              fullWidth
              disableUnderline
              placeholder="Enter your email"
              sx={{
                color: "#9A9EA6",
                fontFamily: "Onest",
                fontWeight: 400,
                fontSize: { xs: 10, md: 12 }
              }}
               {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
            />

            <Box bgcolor="white" borderRadius={50} px={3}>
          <Button
            type="submit"
            sx={{ textTransform: "none", py: 1 }}
            disabled={isSubmitting}
          >
            Submit
          </Button>
            </Box>
          </Box>
          {errors.email && (
        <Box mt={1} pl={2}>
          <span style={{ color: "red", fontSize: 12 }}>
            {errors.email.message}
          </span>
        </Box>
      )}
        </form>
      </Box>

      <Divider orientation="horizontal" sx={{ color: "#EEF2FF1A" }} />

      <Box
        bgcolor="#283C85"
        pt={4}
        pb={2}
        sx={{
          display: {
            xs: "grid",
            md: "flex"
          },
          placeItems: "center",
          gap: 2,
          justifyContent: {
            md: "space-evenly"
          }
        }}>
        <img height={55} src={footerLogo} alt="website logo" />

        <Typography
          sx={{
            fontFamily: "Onest",
            color: "#EEF2FF",
            fontWeight: 400,
            fontSize: 14
          }}>
          © 2025, All Rights Reserved
        </Typography>

        <Box display="flex" gap={1}>
          <img height={25} src={facebook} alt="" />
          <img height={25} src={youtube} alt="" />
          <img height={25} src={what} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
