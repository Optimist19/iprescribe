import { Avatar, Box, Button, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import firstImg from "../assets/firstImg.png";
import secondImg from "../assets/secondImg.png";
import thirdImg from "../assets/thirdImg.png";
import playstore from "../assets/playstore.svg";
import appleStore from "../assets/appleStore.svg";
import phones from "../assets/phones.svg";
import { Menu } from "lucide-react";

import { ChevronRight } from "lucide-react";
import Footer from "./Footer";

function LandingComp() {
  
  return (
    <div>
      <nav>
        <Box
          sx={{
            px: {
              xs: 6,
              md: 12
            }
          }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <Avatar
            src={logo}
            variant="square"
            sx={{
              width: 70,
              height: 70,
              paddingBottom: 3
            }}
          />
          <Box display={"flex"} gap={5} alignItems={"center"}>
            <Typography
              fontSize={14}
              fontFamily="Onest"
              fontWeight={400}
              sx={{
                color: "#424242",
                display: {
                  xs: "none",
                  md: "block"
                }
              }}>
              Home
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={400}
              fontFamily="Onest"
              sx={{
                color: "#424242",
                display: {
                  xs: "none",
                  md: "block"
                }
              }}>
              Features
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={400}
              fontFamily="Onest"
              sx={{
                color: "#424242",
                display: {
                  xs: "none",
                  md: "block"
                }
              }}>
              Contact us
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#283C85",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: 12,
                textTransform: "none",
                paddingX: 4,
                paddingY: 1,
                fontFamily: "Onest"
              }}>
              Join Waitlist
            </Button>
            <Box
              sx={{ cursor: "pointer" }}
              display={{ xs: "block", md: "none" }}>
              <Menu />
            </Box>
          </Box>
        </Box>
      </nav>
      <Box
        display={"flex"}
        sx={{
          display: {
            xs: "grid",
            md: "flex"
          },
          pl: {
            md: 12
          },
          px: {
            xs: 6
          }
        }}
        justifyContent={"space-between"}>
        <Box
          sx={{
            pt: {
              xs: 3,
              md: 10
            }
          }}>
          <Box
            display={"flex"}
            alignItems={"center"}
            bgcolor={"#689AFF1A"}
            gap={2}
            py={0.6}
            px={2}
            borderRadius={4}>
            <Box
              display="flex"
              alignItems="center"
              sx={{ position: "relative", height: 40 }}>
              <Avatar
                sx={{ position: "absolute", zIndex: 3, height: 30, width: 30 }}
                alt="three images overlapping"
                src={firstImg}
              />

              <Avatar
                sx={{
                  position: "absolute",
                  left: 20,
                  zIndex: 2,
                  height: 30,
                  width: 30
                }}
                alt="three images overlapping"
                src={secondImg}
              />

              <Avatar
                sx={{
                  position: "absolute",
                  left: 40,
                  zIndex: 1,
                  height: 30,
                  width: 30
                }}
                alt="three images overlapping"
                src={thirdImg}
              />
            </Box>

            <Typography
              color="#424242"
              fontSize={14}
              fontWeight={400}
              fontFamily={"Onest"}
              ml={9}
              letterSpacing={"-2%"}>
              Ready to explore iPrescribe?
            </Typography>
            <Typography
              color="#405ABA"
              fontSize={14}
              fontFamily={"Onest"}
              fontWeight={500}
              letterSpacing={"-2%"}>
              Join Waitlist
            </Typography>
            <ChevronRight size={12} />
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "70%",
                xl: "60%"
              }
            }}>
            <Typography
              variant="h1"
              color="#212121"
              fontWeight={500}
              fontFamily={"Onest"}
              fontSize={44}
              py={3}
              letterSpacing={"-4%"}
              sx={{
                textAlign: {
                  xs: "center",
                  md: "left"
                },
                width: {
                  xs: "100%",
                  md: "70%"
                }
              }}>
              Your Bridge Between Care & Convenience
            </Typography>
            <Typography
              variant="h4"
              color="#757575"
              fontWeight={400}
              fontFamily={"Onest"}
              fontSize={16}
              letterSpacing={"-2%"}
              sx={{
                textAlign: {
                  xs: "center",
                  md: "left"
                }
              }}>
              Schedule consultations, send or receive e-prescriptions, and
              manage medications from one secure platform.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: {
                  xs: "center",
                  md: "flex-start"
                }
              }}
              py={2}>
              <Box
                bgcolor={"#212121"}
                borderRadius={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={2}
                px={2}
                py={0.2}
                sx={{ cursor: "pointer" }}>
                <Avatar
                  alt="image of google play"
                  src={playstore}
                  sx={{ width: 20, height: 20 }}
                />
                <Box>
                  <Typography
                    color="#EEF2FF"
                    fontSize={10}
                    fontWeight={400}
                    fontFamily={"Onest"}
                    letterSpacing={"-2%"}>
                    Coming Soon
                  </Typography>
                  <Typography
                    fontSize={16}
                    fontWeight={500}
                    fontFamily={"Onest"}
                    letterSpacing={"-2%"}
                    color="#EEF2FF">
                    Google Play
                  </Typography>
                </Box>
              </Box>
              <Box
                bgcolor={"#212121"}
                gap={2}
                px={2.3}
                py={0.2}
                borderRadius={3}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ cursor: "pointer" }}>
                <Avatar
                  alt="image of app store"
                  src={appleStore}
                  sx={{ width: 20, height: 20 }}
                />
                <Box>
                  <Typography
                    color="#EEF2FF"
                    fontSize={10}
                    fontWeight={400}
                    fontFamily={"Onest"}
                    letterSpacing={"-2%"}>
                    Coming Soon
                  </Typography>
                  <Typography
                    fontSize={16}
                    fontWeight={500}
                    fontFamily={"Onest"}
                    letterSpacing={"-2%"}
                    color="#EEF2FF">
                    Appstore
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            my: {
              xs: -10,
              sm: 0
            }
          }}>
          <img className="phones" src={phones} alt="image of a mobile phone" />
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default LandingComp;
