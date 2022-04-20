import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps
} from "@material-ui/icons";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import avatar from "../avatar.png"
import { ClassNames } from '@emotion/react';
import { menuItemClasses } from '@mui/material';

// CSS STYLES
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width:250,
    background: "#511",
    height: "30rem"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "tan"
  }
}));

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd/>,
    listText: "Resume"
  },
  {
    listIcon: <Apps/>,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMailIcon/>,
    listText: "Contacts"
  }
]

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe"/>
      <Divider/>
      <List>
        {menuItems.map((lsItem, key)=>(
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
            <ListItemText className={classes.listItem} primary={lsItem.listText}/>
          </ListItem>
        ))}
      </List>

    </Box>

    <Box component="nav">
      <AppBar position = "static" style={{background: "#222"}}>
        <Toolbar>
          <IconButton>
            <ArrowBack style={{background: "tomato"}}/>
          </IconButton>
          <Typography variant="h5" style={{color:"tan"}}>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

    </Box>
    </>
  )
}

export default Navbar