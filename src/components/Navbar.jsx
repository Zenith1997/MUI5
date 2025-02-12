import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { Notifications } from '@mui/icons-material';
const Navbar = () => {

  const StyledToolbar = styled(Toolbar)(
    {
      display:"flex",
      justifyContent:"space-between"
    }
  )
  const Search = styled("div")(({theme})=>(
      {
       backgroundColor:"white",
       padding:"0 10px",
       borderRadius:theme.shape.borderRadius
      }));

      const Icons = styled(Box)(({theme})=>(
        {
          display:"flex",
          gap:"20px",
          alignItems:"center",
          borderRadius:theme.shape.borderRadius
        }));
  
  return (
    <AppBar position='sticky'>
  <StyledToolbar>

  <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
    LAMA DEV
  </Typography>
  <PetsIcon sx={{display:{xs:"block",sm:"none",md:"none"}}}/>
  <Search><InputBase placeholder='Search..'/></Search>
  <Icons>

  <Badge badgeContent={2} color="error">
  <MailIcon  />
</Badge>
<Badge badgeContent={1} color="error">
  <Notifications/>
</Badge>
<Avatar src=''/>
  </Icons>
 
  </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
