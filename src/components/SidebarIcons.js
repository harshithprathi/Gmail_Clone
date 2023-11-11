import React from "react";
import { IconButton } from '@mui/material';
// import AddIcon from "@material-ui/icons/Add";
// import CreateButton from "@material-ui/icons/Create";
// import '../css/sidebar.css';
// import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from '@mui/icons-material/Inbox';
// import StarRateIcon from "@material-ui/icons/StarRate";
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import WatchLaterIcon from "@material-ui/icons/WatchLater";
// import LabelImportantIcon from "@material-ui/icons/Label";
// import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';import SendIcon from "@material-ui/icons/Send";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';import DeleteIcon from "@material-ui/icons/Delete";
// import FindInPageIcon from "@material-ui/icons/FindInPage";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
// import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
// import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import InsertDriveFileOutlined from '@mui/icons-material/InsertDriveFileOutlined';
// import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
// import MarkAsUnreadOutlinedIcon from '@mui/icons-material/MarkAsUnreadOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useDispatch } from "react-redux";
// import { openSendMessage } from "../features/counter/mailSlice";
// import { useNavigate } from "react-router-dom";
import { hidebaroptions } from "../features/counter/selectoptionsSlice";
function SidebarIcons() {
    const dispatch=useDispatch();
    // const navigate=useNavigate();
    const handleclick = () =>{
        dispatch(hidebaroptions());
        console.log('clickedicon');
    }
  return (
    <div className="sidebar"  style={{maxWidth: '70px', marginTop: '50px'}} >
        <IconButton onClick={handleclick}>
            <ModeEditOutlineOutlinedIcon  style={{fontSize:"24px"}} />
        </IconButton>
        <IconButton onClick={handleclick}>
            <InboxIcon/>
        </IconButton>
        <IconButton onClick={handleclick}>
            <StarBorderIcon/>
        </IconButton>
        <IconButton onClick={handleclick}>
            <AccessTimeIcon/>
        </IconButton>
        <IconButton onClick={handleclick}>
            <InsertDriveFileOutlined/>
        </IconButton>
        <IconButton onClick={handleclick}>
            <ExpandMoreIcon/>
        </IconButton>
</div>
  )
}

export default SidebarIcons