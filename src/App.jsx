import { Button, styled } from "@mui/material";
import "./App.css";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {

  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    margin:5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled":{
      backgroundColor:"gray",
      color:"white"
    }
  })
  return (
    <div>
     <BlueButton>My button</BlueButton>
     <BlueButton>Another button</BlueButton>
    </div>
  );
}

export default App;
