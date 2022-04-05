// import React from 'react'
import "./user.css"
import Axios from "axios";
import FileDownload from "js-file-download";

import { CalendarToday, MailOutline } from "@mui/icons-material";
import { LocationSearching, PermIdentity, PhoneAndroid } from "@material-ui/icons";
export default function User(){

    const download= (e)=>{
        e.preventDefault()
        Axios({url:"http://localhost:4000",
        method: "GET",
        responseType: "blob"}).then((res)=>{
            console.log(res);
            FileDownload(res.data,"downloaded.pdf")
        })
    }
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">User profile</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="userShowImg"/>   
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">John Smith</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                            </div>
                        
                        </div>


                    <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className="userShowIcon"/>
                    <span className="userShowInfoTitle"> john99 </span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <CalendarToday className="userShowIcon"/>
                    <span className="userShowInfoTitle"> 10.12.1999 </span>
                    </div>
                    <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon"/>
                    <span className="userShowInfoTitle"> +961 76 534 122 </span>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className="userShowIcon"/>
                    <span className="userShowInfoTitle"> john99@gmail.com </span>
                    </div>
                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon"/>
                    <span className="userShowInfoTitle"> Beirut | Lebanon </span>
                    </div>
                    </div>
                    </div>
                <div className="userFileDownload"><br/>
                <button className="downloadFileButton" onClick={(e)=>download(e)} >Download PDF</button>
                </div>
                </div>
            </div>
    )
}