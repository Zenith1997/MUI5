import { Button, styled, Typography } from "@mui/material";
import "./App.css";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {

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


  const BlueTypography = styled(Typography)(({theme})=>({
     
    margin:5,
    color:theme.palette.primary.main,
    variant:"h1",
    "&:hover": {
      backgroundColor: theme.palette.otherColor.main,
    },
    "&:disabled":{
      backgroundColor:"gray",
      color:"white"
    }
    }));
  
  return (
    <div>


  
<BlueTypography>dsfkkkkkkkkkkk</BlueTypography>  

     <BlueButton>My button</BlueButton>
     <BlueButton>Another button</BlueButton>
    </div>
  );
}

export default App;
