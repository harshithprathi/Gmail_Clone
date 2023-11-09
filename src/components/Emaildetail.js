import React from 'react';
import '../css/emaillist.css';
import { Avatar, IconButton } from '@material-ui/core';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons//Refresh';
import ReplyIcon from '@material-ui/icons/Reply';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PrintIcon from '@material-ui/icons/Print';
import LaunchIcon from '@material-ui/icons/Launch';
import MoreVertIcon from '@material-ui/icons//MoreVert';
import StarIcon from '@material-ui/icons/Star';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectedMail } from '../features/counter/mailSlice';

function Emaildetail() {
    const navigate=useNavigate();
    const mail=useSelector(selectedMail);
  return (
    <div className='emaildetails'>
        <div className='emaillist__settings'>
            <div className='emaillist__settingsLeft'>
                <IconButton>
                    <ArrowBackIcon onClick={()=>navigate('/')} />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>

            </div>
            <div className='emaillist__settingsRight'>
                <p>1-50 of 1,432</p>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>

        <div className='emaildetails__message'>
        <div className='emaildetails__header'>
            <div className='emaildetails__headerLeft'>
                <h4>{mail.subject}</h4>
                <p style={{fontSize: '12px', backgroundColor: '#ebebeb', padding:'3px', borderRadius: '5px', marginLeft: '10px'}}>Inbox</p>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
            </div>
            <div className='emaildetails__headerRight'>
                <IconButton>
                    <PrintIcon/>
                </IconButton>
                <IconButton>
                    <LaunchIcon/>
                </IconButton>
            </div>
        </div>

        <div className='emaildetails__middleheader'>
            <div className='emaildetails__middleheaderLeft'>
                <IconButton>
                    <Avatar/>
                </IconButton>
                <h4>{mail.name}</h4>
                <p>{mail.email}</p>
            </div>

            <div className='emaildetails__middleheaderRight'>
                <p>{mail.time}</p>
                <IconButton>
                    <StarIcon />
                </IconButton>
                <IconButton>
                    <ReplyIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

            
        </div>
        <div className='emaildetails__body'>
            <p>{mail.message}</p>
        </div>
    </div>
    </div>
  );
}

export default Emaildetail