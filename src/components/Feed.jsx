import { Box } from "@mui/material"
import Post from "./Post"
import data from "../assets/data/data.json"
const Feed = () => {



  return (
    <Box flex={4} p={2}>
{
  data.map((res,key)=>(
    <Post key={key} name={res.img}/>
  ))
}
  
 

    </Box>
  )
}

export default Feed
