import React, { useState, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { TypesContext } from "../types/Types.context";
import { authContext } from "../auth/useContext";
import Navigator from "./layouts/Navigator";
import Header from "./layouts/Header";
import Copyright from "./layouts/Copyright";
import Theme from "../utils/theme";
import Login from "../pages/User/Login2";
import RoutesCustom from "../utils/RouterCustom";
const drawerWidth = 265;

const Layout = () => {
  const { getUserId } = useContext(authContext) as TypesContext;
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(Theme().theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={Theme().theme}>
      <CssBaseline />
      {getUserId() === 0 ? (
        <Login />
      ) : (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            {isSmUp ? null : (
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
              />
            )}
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              sx={{ display: { sm: "block", xs: "none" } }}
            />
          </Box>
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <Box component="main" sx={{ flex: 1, py: 3, px: 3 }}>
              <RoutesCustom />
            </Box>
            <Box component="footer" sx={{ p: 2 }}>
              <Copyright />
            </Box>
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
};

export default Layout;
