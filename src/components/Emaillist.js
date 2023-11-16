import React, { useEffect, useState } from 'react';
import '../css/emaillist.css'
import EmailListSetting from './EmailListSetting';
import Emailtype from './Emailtype';
import Emailbody from './Emailbody';
import { db } from '../firebase.js';
import { selectStarredMails, showDeletedMails } from '../features/counter/starredSlice';
import { useSelector } from 'react-redux';
import { selectShowbarOptions } from '../features/counter/selectoptionsSlice';
import { selectUser } from '../features/counter/useSlice';


function Emaillist({page}) {
    const [emails,setEmails]= useState([]);
    const starredmails=useSelector(selectStarredMails);
    // const [starmails,setstarmails]= useState([]);
    const show=useSelector(selectShowbarOptions);
    const deletedmails=useSelector(showDeletedMails);
    const user=useSelector(selectUser);
    const Snoozedmails=[
        {
         from: "siddharam@riktamtech.com",
         fromName: "Siddharam Shingshetty",
         message: "This is a sample mail 1",
         subject: "Sample mail 1",
         timestamp: "12:21",
         to:"mansoor@riktamtech.com"
        },
        {
            from: "siddharam@riktamtech.com",
            fromName: "Siddharam Shingshetty",
            message: "This is a sample mail 2",
            subject: "Sample mail 2",
            timestamp: "10:01",
            to:"raghav@riktamtech.com"
        },
        {
            from: "siddharam@riktamtech.com",
            fromName: "Siddharam Shingshetty",
            message: "This is a sample mail 3",
            subject: "Sample mail 3",
            timestamp: "00:11",
            to:"anshuman@riktamtech.com"
        },
        {
            from: "jayakrishna@riktamtech.com",
            fromName: "JayaKrishna Panga",
            message: "This is a sample mail 4",
            subject: "Sample mail 4",
            timestamp: "09:01",
            to:"Siddharam@riktamtech.com"
        },
        {
            from: "neelmani@riktamtech.com",
            fromName: "Neelmani Chowdary",
            message: "This is a sample mail 5",
            subject: "Sample mail 5",
            timestamp: "20:09",
            to:"Siddharam@riktamtech.com"
        }
    ];

    const Draftmails=[
        {
         from: "siddharam@riktamtech.com",
         fromName: "Siddharam Shingshetty",
         message: "This is a sample mail 6",
         subject: "Sample mail 6",
         timestamp: "12:21",
         to:"prathyusha@riktamtech.com"
        },
        {
            from: "siddharam@riktamtech.com",
            fromName: "Siddharam Shingshetty",
            message: "This is a sample mail 7",
            subject: "Sample mail 7",
            timestamp: "10:01",
            to:"dhamareshwar@riktamtech.com"
        },
        {
            from: "siddharam@riktamtech.com",
            fromName: "Siddharam Shingshetty",
            message: "This is a sample mail 8",
            subject: "Sample mail 8",
            timestamp: "00:11",
            to:"vasu@riktamtech.com"
        },
        {
            from: "harikeerthana@riktamtech.com",
            fromName: "Hari Keerthana",
            message: "This is a sample mail 9",
            subject: "Sample mail 9",
            timestamp: "09:01",
            to:"Siddharam@riktamtech.com"
        },
        {
            from: "Chaitanya@riktamtech.com",
            fromName: "Chaitanya Budhagavi",
            message: "This is a sample mail 10",
            subject: "Sample mail 10",
            timestamp: "20:09",
            to:"Siddharam@riktamtech.com"
        }
    ];

    const Importantmails=[
        {
         from: "siddharam@riktamtech.com",
         fromName: "Siddharam Shingshetty",
         message: "This is a sample mail 11",
         subject: "Sample mail 11",
         timestamp: "12:21",
         to:"anusha@riktamtech.com"
        },
        {
            from: "siddharam@riktamtech.com",
            fromName: "Siddharam Shingshetty",
            message: "This is a sample mail 12",
            subject: "Sample mail 12",
            timestamp: "10:01",
            to:"supriya@riktamtech.com"
        },
        {
            from: "eknath@riktamtech.com",
            fromName: "Eknath Pilankar",
            message: "This is a sample mail 13",
            subject: "Sample mail 13",
            timestamp: "20:09",
            to:"Siddharam@riktamtech.com"
        }
    ];


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
        {   (page==="Inbox") &&
            emails?.map(({ id, data })=>{
                if (data.from === user.email){
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
                }
                return <div></div>;
                
            })
        }
        {
            page==='Starred' &&
            starredmails?.map((data)=>{
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
            deletedmails?.map((data)=>{
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
            page==='Snoozed' &&
            Snoozedmails?.map((data)=>{
                return (
                    <Emailbody 
                    name={data.fromName}
                    email={data.from}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.timestamp}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        {
            page==='Drafts' &&
            Draftmails?.map((data)=>{
                return (
                    <Emailbody 
                    name={data.fromName}
                    email={data.from}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.timestamp}
                    page={page}
                    to={data.to}
                    />
                );
            })
        }
        {
            page==='Important' &&
            Importantmails?.map((data)=>{
                return (
                    <Emailbody 
                    name={data.fromName}
                    email={data.from}
                    key={(1000+ Math.random() + Math.random()).toString(36)}
                    subject={data.subject}
                    message={data.message}
                    time={data.timestamp}
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