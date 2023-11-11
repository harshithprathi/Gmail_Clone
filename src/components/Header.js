import React, { useState } from "react";
import ReorderIcon from '@material-ui/icons/Reorder';
import {IconButton, Avatar} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Appsicon from '@material-ui/icons/Apps';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';import '../css/header.css';
import Tune from '@material-ui/icons/Tune';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/counter/useSlice";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { hidebaroptions, showbaroptions } from "../features/counter/selectoptionsSlice";


function Header(){
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const [count,setcount]=useState(true);
    function handleclick(){
        if(count){
            dispatch(hidebaroptions());
            setcount(false);
        }
        else{
            dispatch(showbaroptions());
            setcount(true);
        }
    };
    return (
        <div className="header">
            <div className="left_header">
                <IconButton onClick={handleclick}>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="logo" />
            </div>
            <div className="middle_header">
                    <div className="search_mail">
                        <IconButton>
                            <SearchIcon></SearchIcon>
                        </IconButton>
                        <input type="text" placeholder="Search mail" />
                        <IconButton>
                            <Tune></Tune>
                        </IconButton>
                    </div>
            </div>
            <div className="right_header">
                <IconButton>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon></SettingsOutlinedIcon>
                </IconButton>
                <IconButton>
                    <Appsicon></Appsicon>
                </IconButton>
                <Avatar src={user?.photoURL} onClick={()=>firebase.auth().signOut()}></Avatar>
            </div>
        </div>
    );
}

export default Header;