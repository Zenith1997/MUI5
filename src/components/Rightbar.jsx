import { Box } from "@mui/material"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import QuiltedImageList from "./QuiltedImageList";
import TotalAvatars from "./TotalAvatars";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#endregion',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const Rightbar = () => {
  return (
    <Box   flex={2}  p={1} sx={{display:{xs:"none",sm:"block"},justifyContent:"initial"}}> 

      <Box position={"fixed"}>
  
      <Box sx={{ width: '80%' }}>
      <Stack spacing={2}>
        <Stack>
        <TotalAvatars/>
        </Stack>
    
        <Item><QuiltedImageList/></Item>
        
    
      </Stack>
    </Box>
      </Box>
    </Box>
  )
}

export default Rightbar
