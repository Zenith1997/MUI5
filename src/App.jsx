import '@fontsource/inter';

import Sidebar from "./components/Sidebar"
import Rightbar from "./components/Rightbar"
import Feed from "./components/Feed"
import { Box, Container, Stack } from "@mui/material"
import Navbar from "./components/Navbar"



const App = () => {
  return (
    <Box>
   <Navbar/>
     <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>

      <Sidebar/>
      <Feed/>
      <Rightbar/>
     </Stack>
    </Box>
  )
}

export default App
