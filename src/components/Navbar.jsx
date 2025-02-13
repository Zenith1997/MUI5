import MailIcon from "@mui/icons-material/Mail";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from '@mui/icons-material/Search';
import { Notifications } from "@mui/icons-material";
const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    display:'flex',
    gap:"5px",
    alignItems:"center",
    padding: "0 10px",
    margin: "0px 20px",
    borderRadius: theme.shape.borderRadius,
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none", md: "none" } }} />
        <Search>
          <SearchIcon color="disabled"/>
          <InputBase placeholder="Search.." ></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: "30px", height: "30px" }} src="" />
        </Icons>
        <UserBox>
          <Avatar sx={{ width: "30px", height: "30px" }} src="" />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
