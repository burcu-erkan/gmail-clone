import React,{useEffect} from 'react';
import "./Sidebar.css";
import {Button, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import  LabelImportantIcon from '@material-ui/icons/LabelImportant'; 
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch, useSelector} from "react-redux";
import {openSendMessage} from "./features/mailSlice";
//import { countMail } from './features/mailSlice';



function Sidebar() {
    const dispatch = useDispatch();
    //const count = useSelector(countMail);
  

    
    return (
        <div className="sidebar">
         <Button 
         onClick={() => dispatch(openSendMessage())}
         className="compose_button" 
         startIcon= {<AddIcon fontSize="large"/>}>
             Compose
         </Button>
         <SidebarOption Icon={InboxIcon} title="Inbox" number={4}selected={true}/>
         <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
         <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54}/>
         <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
         <SidebarOption Icon={NearMeIcon} title="Sent" number={54}/>
         <SidebarOption Icon={NoteIcon} title="Draft" number={54}/>
         <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>


  <div className="sidebar_footer">
      <div className="sidebar_footerIcon">
          <IconButton>
              <PersonIcon/>
          </IconButton>
          <IconButton>
              <DuoIcon/>
          </IconButton>
          <IconButton>
              <PhoneIcon/>
          </IconButton>
      </div>
  </div>
        </div>
    )
}

export default Sidebar;
