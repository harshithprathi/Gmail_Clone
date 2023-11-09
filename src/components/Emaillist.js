import React, { useEffect, useState } from 'react';
import '../css/emaillist.css'
import EmailListSetting from './EmailListSetting';
import Emailtype from './Emailtype';
import Emailbody from './Emailbody';
import { db } from '../firebase.js';
import { selectStarredMails, showDeletedMails } from '../features/counter/starredSlice';
import { useSelector } from 'react-redux';
import { selectShowbarOptions } from '../features/counter/selectoptionsSlice';


function Emaillist({page}) {
    const [emails,setEmails]= useState([]);
    const starredmails=useSelector(selectStarredMails);
    // const [starmails,setstarmails]= useState([]);
    const show=useSelector(selectShowbarOptions);
    const deletedmails=useSelector(showDeletedMails);


    useEffect(()=>{
        db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setEmails(snapshot.docs.map(doc=>({
                id:doc.id,
                data: doc.data()
            })))
        })
    },[]);
  return (
    <div className={`emaillist${!show ? 'hide' : ''}`}>
        <EmailListSetting />
        <Emailtype />
        {   (page!=="Starred" && page!=="Bin") &&
            emails.map(({ id, data })=>{
                return (
                <Emailbody 
                name={data.fromName}
                email={data.from}
                key={id}
                subject={data.subject} 
                message={data.message} 
                time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                })}
                page= {page}
                to={data.to} />);
            })
        }
        {
            page==='Starred' &&
            starredmails.map((data)=>{
                return (
                    <Emailbody 
                    name={data.name}
                    email={data.email}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.time}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        {
            page==='Bin' &&
            deletedmails.map((data)=>{
                return (
                    <Emailbody 
                    name={data.name}
                    email={data.email}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.time}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        
    </div>
  )
}

export default Emaillist;