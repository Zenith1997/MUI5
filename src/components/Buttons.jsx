import { Button, styled, Typography } from '@mui/material';
import React from 'react'

const Buttons = () => {
    const BlueButton = styled(Button)(({theme})=>({
        backgroundColor: "skyblue",
        margin:5,
        "&:hover": {
          backgroundColor: theme.palette.otherColor.main,
        },
        "&:disabled":{
          backgroundColor:"gray",
          color:"white"
        }
      }));
    
    
      const BlueTypography = styled(Typography)(
        (({theme})=>({
          backgroundColor: "skyblue",
        margin:5,
        "&:hover": {
          backgroundColor: theme.palette.otherColor.main,
        },
        "&:disabled":{
          backgroundColor:"gray",
          color:"white"
        }
        }))
      )
  return (
    <div>
      <BlueTypography></BlueTypography>
      <BlueButton></BlueButton>
    </div>
  )
}

export default Buttons
