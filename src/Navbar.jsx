import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Groups", path: "/groups" },
  { name: "Give", path: "/give" },
  { name: "Get in Touch", path: "/contact" }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#6366F1" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="w-[60px] h-[60px] ">
          <img src="https://res.cloudinary.com/dtrskzurx/image/upload/v1738426457/church-logo_utmuv8.jpg" className="rounded-xl" alt="" />
          </div>


          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
  <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={handleOpenNavMenu}
    color="inherit"
  >
    <MenuIcon />
  </IconButton>
  <Menu
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right", // Adjusted to align the menu to the right
    }}
    keepMounted
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
    sx={{ display: { xs: "block", md: "none" } }}
  >
    {pages.map((page) => (
      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
        <Link to={page.path} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography sx={{ textAlign: "center", color: { xs: "black", md: "white" } }}>
            {page.name}
          </Typography>
        </Link>
      </MenuItem>
    ))}
  </Menu>
</Box>


      {/*   smaller screens */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page.name} sx={{ my: 2, color: "white", display: "block",
                "&:hover": { backgroundColor: "black" }, // Black background on hover
               }}>
                <Link to={page.path} style={{ textDecoration: "none", color: "inherit" }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
