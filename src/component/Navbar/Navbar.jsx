import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemText,
  Box,
  Drawer,
} from "@material-ui/core";

import "./Nav.css";

import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { AccountCircle } from "@material-ui/icons";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./NavBarStyle";
import { Link , useHistory} from "react-router-dom";
import bestSellerProducts from "../../data/bestSellerProducts";
// import { Redirect } from "react-router-dom";

export default function App() {
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const links = ["/", "/about", "/shop", "/contact"];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About", "Shop", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText>
              <Link to={links[index]} className={classes.listItemLink}>
                {text}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 1 new notifications" color="inherit">
          <Badge badgeContent={Object.entries(bestSellerProducts).length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className="nav" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon onClick={toggleDrawer(true)} />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            className={classes.drawer}
          >
            {list()}
          </Drawer>
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Pholx
          </Typography> */}
          <img src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/logotype.png" />
          <div>
            <List className={classes.listItemsActive} id="none">
              <ListItemText
                className={classes.listItem}
                // onClick={closeOnMobileMenu}
              >
                <Link to="/" className={classes.listItemLink}>
                  <ListItemText className={classes.linkText}>Home</ListItemText>
                </Link>
              </ListItemText>
              <ListItemText
                className={classes.listItem}
                // onClick={closeOnMobileMenu}
              >
                <Link to="/about" className={classes.listItemLink}>
                  <ListItemText className={classes.linkText}>
                    About
                  </ListItemText>
                </Link>
              </ListItemText>
              <ListItemText
                className={classes.listItem}
                // onClick={closeOnMobileMenu}
              >
                <Link to="/shop" className={classes.listItemLink}>
                  <ListItemText className={classes.linkText}>Shop</ListItemText>
                </Link>
              </ListItemText>
              <ListItemText
                className={classes.listItem}
                // onClick={closeOnMobileMenu}
              >
                <Link to="/contact" className={classes.listItemLink}>
                  <ListItemText className={classes.linkText}>
                    Contact
                  </ListItemText>
                </Link>
              </ListItemText>
            </List>
          </div>
          <div className={classes.grow}/>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              onClick={() => history.push("/login")}
              color="inherit"
            >
                <Link to="/">
                  <AccountCircle />
                </Link>
              {/* {/<AccountCircle />} */}
            </IconButton>
            <Link to="/cart">
              <IconButton aria-label="show 1 new notifications" color="inherit">
                <Badge badgeContent={Object.entries(bestSellerProducts).length} color="secondary">
                  <ShoppingCartIcon style={{color: "black"}}/>
                </Badge>
              </IconButton>
            </Link>
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}