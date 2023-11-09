import React, { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import HeightIcon from '@material-ui/icons/Height';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PhotoIcon from '@material-ui/icons/Photo';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import '../css/compose.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeSendMessage } from '../features/counter/mailSlice';
import { db } from '../firebase.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { selectUser } from '../features/counter/useSlice';

function Compose() {
    const [to,setTo]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');
    const [isMinimized, setIsMinimized] = useState(false);
    const dispatch=useDispatch();
    const user=useSelector(selectUser);

    function formSubmit(e){
        e.preventDefault();
        if(to===""){
            return alert("Enter the To email address");
        }
        if(subject===""){
            return alert("Your Subject is empty");
        }
        if(message===""){
            return alert("Empty message can't be sent");
        }

        db.collection("emails").add({
            to,
            subject,
            message,
            from:user.email,
            fromName:user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        // if(window.Email) {
        //     window.Email.send({
        //         Host : "smtp.elasticemail.com",
        //         Username : "jk1999@yopmail.com",
        //         Password : "B4B6C267E3B1F91B3D9F9C9603D10C84680A",
        //         Port: 2525,
        //         To : 'pangajk3@gmail.com',
        //         From : 'harshithyker43@gmail.com',
        //         Subject : 'subject',
        //         Body : 'message'
        //     }).then(
        //       message => alert(message)
        //     );
        // }
        // window.Email.send({
        //     Host : "smtp.elasticemail.com",
        //     Username : "spiderman89570@gmail.com",
        //     Password : "B5B03849BFB38EE46D87E69F48E3339E7A7A",
        //     PORT: 2525,
        //     To : to,
        //     From : "harshith@riktamtech.com",
        //     Subject : subject,
        //     Body : message,
        // }).then(
        //   message => console.log('message',message)
        // );
        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "riktamtraining@yopmail.com",
            Password : "A35DFCF4162964DAA3D362D35913453AC467",
            PORT: 2525,
            To : to,
            From : "harshithyker43@gmail.com",
            Subject : subject,
            Body : message,
        }).then(
          message => console.log('message',message)
        );
        // window.Email.send({
        //     Host : "smtp.elasticemail.com",
        //     Username : "jk1999@yopmail.com",
        //     Password : "B4B6C267E3B1F91B3D9F9C9603D10C84680A",
        //     Port: 2525,
        //     To : 'harshithyker43@gmail.com',
        //     From : 'jk1999@yopmail.com',
        //     Subject : 'subject',
        //     Body : 'message'
        // }).then(
        //     message => console.log('message',message)
        // );
        
        setTo('');
        setSubject('');
        setMessage('');
        dispatch(closeSendMessage());
        alert("Email sent successfully");
    }

    const toggleMinimize = () => {
        setIsMinimized(true);
    };

    const toggleMaximize = () => {
        setIsMinimized(false);
    };


  return (
    <div className={`compose${isMinimized ? ' minimized' : ''}`}>
        <div className='compose__header'>
            <div className='compose__header__left'>
                <span>New Message</span>
            </div>
            <div className='compose__header__right'>
                <RemoveIcon  onClick={toggleMinimize} />
                <HeightIcon onClick={toggleMaximize} />
                <CloseIcon onClick={()=>dispatch(closeSendMessage())} />
            </div>
        </div>
        {!isMinimized && (
            <form onSubmit={formSubmit}>
            <div className='compose__body'>
                <div className='compose__bodyForm'>
                    <input type='email' placeholder='Recipents' value={to} onChange={(e)=>setTo(e.target.value)} />
                    <input type='text' placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)} />
                    <textarea rows="20" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
                </div>
            </div>
    
            <div className='compose__footer'>
                <div className='compose__footerLeft'>
                    <button type='submit'>
                        Send <ArrowDropDownIcon/>
                    </button>
                </div>
                <div className='compose__footerRight'>
                    <FormatColorTextIcon/>
                    <AttachFileIcon/>
                    <LinkIcon/>
                    <InsertEmoticonIcon/>
                    <NoteAddIcon/>
                    <PhotoIcon/>
                    <PhonelinkLockIcon/>
                    <CreateIcon/>
                    <MoreVertIcon/>
                    <DeleteIcon/>
                </div>
            </div>
            </form>
       

        )}
        </div>
  )
}

export default Compose