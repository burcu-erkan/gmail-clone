import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {selectUser} from "./features/userSlice";
import {useSelector,useDispatch} from "react-redux";
import { auth } from "./firebase";
import {logout} from "./features/userSlice"



function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = ()=>{
    auth.signOut().then(()=>{
      dispatch(logout());
    })
   

  }
  return (
    <div className="header">
      <div className="header_left">
          <IconButton><MenuIcon /></IconButton>
        
        <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="logo"/>
      </div>
      <div className="header_middle">
          <SearchIcon/>
          <input placeholder="Search mail"/>
          <ArrowDropDownIcon className="MuiSvgIcon"/>
          
      </div>
      <div className="header_right">
          <IconButton>
              <HelpOutlineIcon/>
              <SettingsIcon/>
              <AppsIcon/>
              <NotificationsIcon/>
              <Avatar onClick={signOut} src = {user?.photoUrl} />
              
          </IconButton>
      </div>
   
    </div>
  );
}

export default Header;
