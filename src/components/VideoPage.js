import { useParams } from "react-router-dom";
import Header from "./Header";
import Videopvcom from "./Videopvcom";
import "./VideoPage.css";
import React, { useState } from 'react';

import videos from "./video.json";
function VideoPage(){
    const Params = useParams();
    const id = Params.id;
    function  finderFunction(video){
        return video.id == id ;
    }
     
    
    const video = videos.find(finderFunction);


    const [likes, setLikes] = useState(localStorage.getItem(id +"likes"));
    const [dislikes, setDislikes] = useState(30);
    const videos = videos.find(finderFunction)
    function onlike(){
        if (likes == "true"){
            localStorage.setItem(id + "_liked",false)
            setLikes("false");
        }
        else{
            localStorage.setItem(id + "_Unliked",true)
            setLikes("true");
        }
    }
    const handleDislike = () => {
      setDislikes(dislikes + 1);
    };
    const isloggedId = localStorage.getItem("LoggedIn")
    function onLogout(){
        localStorage.setItem("LoggedIn",false);
        window.location.href = "/";
    }
    function onSubscribe(){
        if (subscribe == "true"){
            localStorage.setItem(id + "_Subscribed",false)
            setSubscribed("false");
        }
        else{
            localStorage.setItem(id + "_Unsubscribed",true)
            setSubscribed("true");
        }
    }
    const [subscribe, setSubscribed] = useState(localStorage.getItem(id + "subscribe"));
    



return(

<div className="">
<Header/> 
       <div className="VMainBody">
        <div className="Vsideb"></div>
            <div className="VMain">
                <div className="VVideo">
                    <div className="VPlay">
<iframe className="iframe" src={"https://www.youtube.com/embed/" + id + "?rel=0&mute=1&autoplay=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    </div>
                </div>
                <div className="VExtra">
                <div className="VTitle">{video.title}</div>
                <div className="VSubs">
                    <div className="VChannel">
                        <div className="VLogo"></div>
                        <div className="VName">
                            <div className="VCName">{video.channelName}</div>
                            <div className="VCSubs">{video.views}</div>
                        </div>
                        <div className="VSubscriber"><p><b><center>Subscribe</center></b></p></div>
                    </div>
                    <div className="VLike">

                            <div className="VLike-1">
                            <div className="VLike-1-1" >
                            <button className={ 
                                    likes == "true" ? "likesButton" : "likedbutton"
                                }onClick={onlike}><i class="fa-solid fa-thumbs-up"></i></button>
                                
                            </div><div className="VLike-1-2">
                            <i class="fa-solid fa-thumbs-down"></i>
                            </div>
                            </div>
                            <div className="VLike-2"><i class="fa-solid fa-share"></i><b>Share</b>
                            </div>
                            <div className="VLike-3"><i class="fa-solid fa-scissors"></i><b>Clip</b></div>
                            <div className="VLike-4"><b>Save</b></div>
                            
                    </div>
                   
                </div>
                <div className="VDescription">description
                </div>
                </div>
            </div>
            <div className="VSide">
           
            <div className="suggestions">
            {video.map(function (videoItem) {
                        return (<Videopvcom
                            title={videoItem.title}
                            cname={videoItem.channelName}

                            link={videoItem.thumbnail.url}
                            ></Videopvcom>)
                        })}

           
        </div>
            </div>
           
                </div> 
</div>
)

}
export default VideoPage;