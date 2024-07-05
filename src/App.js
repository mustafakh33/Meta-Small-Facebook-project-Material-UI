import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
} from "@mui/material";
import AppBarr from "./components/AppBar";
import { useMemo, useState } from "react";
import getDesignTokens from "./styles/MyTheme";
import MyList from "./components/List";
import Posts from "./components/Posts";
import SideBar from "./components/SideBar";
import AddPost from "./components/AddPost";
import Divider from "@mui/material/Divider";

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const [showList, setShowList] = useState("none");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBarr {...{showList,setShowList}} />

      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ flexDirection: "row" }}
      >
        <MyList {...{showList,setmyMOde,theme}} />
        <Posts />
        <SideBar theme={theme} />
      </Stack>

      <AddPost />
    </ThemeProvider>
  );
}

export default App;
