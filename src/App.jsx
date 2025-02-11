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
  return (
    <div>

      <Button variant="text">Text</Button>
      <Button variant="contained" color="secondary">Contained</Button>
      <Button variant="outlined">Outlined</Button>
  

      <Typography>hi</Typography>
     <BlueButton>My button</BlueButton>
     <BlueButton>Another button</BlueButton>
    </div>
  );
}

export default App;
