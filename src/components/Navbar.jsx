import MailIcon from "@mui/icons-material/Mail";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from '@mui/icons-material/Search';
import { Notifications } from "@mui/icons-material";
import { useState } from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
const Navbar = () => {
const [open, setOpen] = useState(false);
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px", // Ensures spacing
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  gap: "5px",
  padding: "5px 15px",
  borderRadius: theme.shape.borderRadius,
  width: "40%", // Reduce width for better alignment
  maxWidth: "500px", // Prevent excessive width on larger screens
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: "17%", // Keeps it aligned vertically in the navbar
  [theme.breakpoints.down("sm")]: {
    width: "70%",  // Centering for mobile
    maxWidth: "none",
    position: "relative",
    left: "auto",
    transform: "none",
    margin: "0 auto",
  },
}));



  

  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",  // Reduce gap for better fit
    [theme.breakpoints.down("sm")]: {
      display: "none",  // Hide for small screens
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
        <ResponsiveDrawer sx={{ display: { xs: "block", sm: "none", md: "none" } }} />
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
          <Button >
      
          <Avatar  onClick={() => setOpen((prev) => !prev)}   sx={{ width: "30px", height: "30px" }} src="" />
          <Menu
          
          sx={{marginTop:"50px"}}
         id="demo-positioned-menu"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        onClose={(e)=>setOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
          </Button>
          
        </Icons>
        <UserBox>
          <Avatar onClick={()=>setOpen((prev)=>!prev)} sx={{ width: "30px", height: "30px" }} src="" />
          <Menu
          
          sx={{marginTop:"50px"}}
         id="demo-positioned-menu"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        onClose={(e)=>setOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
          <Typography variant="span">John</Typography>
       
        </UserBox>
 
      
     
      </StyledToolbar>
   
    </AppBar>
  );
};

export default Navbar;
