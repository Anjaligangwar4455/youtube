import "./HomeComponent.css";
import VideoPreviewComponent from "./VideoPreviewComponent";
import videos from "./video.json"; 

function HomeComponent(){
    function onSignin(){
        window.location.href="/login";
    }
    const isLoggedIn = localStorage.getItem("loggedIn");
    function onLogout(){
        localStorage.setItem("loggedIn",false);
        window.location.href="/";
    }
    return (
        <div className="home">
        <div className="sidebar"> 
          <div className="sidefeature">
            <div className="sideline"><i className="fa-solid fa-bars"></i><br/></div>
            <div className="sidehome"> <a href="newyoutube.html">    <i className="fa-solid fa-house"></i>
                  <br/>Home</a></div>
            <div className="sidetrend">
                <a href="trending.html">
                    <i className="fa-solid fa-fire"></i> <br/> Trending </a>
            </div>
            <div className="sidesub"> 
                <a href="subscription.html"><i className="fa-solid fa-clapperboard"></i>Subscription</a>
            </div>
            <div className="sidelib"> 
                <a href="library.html"><i className="fa-solid fa-folder"></i><br/> Library</a>
            </div>
          </div>
        </div>
    

        <div className="mainbody">
           
           <div className="header">  <div className="logo">

           <div className="logo2"><img src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="logo" height="50px" width="130px"/></div>
           </div>
           <div className="search">
               <div className="search1">
                   <input type="search" name="" id="ser" placeholder="search"/>
               </div>
               <div className="search2" ><i id="lo" className="fa-solid fa-magnifying-glass"></i>
               
               </div>
           </div>
           <div className="signin">
              <div className="create">
                  <i className="fa-solid fa-video-slash"></i>
               </div>
               <div className="menu"><i className="fa-solid fa-bars"></i></div>
               <div className="bell"><i className="fa-solid fa-bell"></i></div>
               <div className="id">
                {isLoggedIn == 'true' ? (<div> <button onClick={onLogout}>
                    <i class="fa-solid fa-right-from-bracket"></i></button>
                     </div>) : (
                <button onClick={onSignin}>
                <i className="fa-solid fa-user"></i></button>)}
               </div>
           </div>
           </div>
           <div className="mainTitle">  <div className="main-right-top">
                            <div className='icons1'>All</div>
                            <div className='icons2'>Music</div>
                            <div className='icons3'>Python</div>
                            <div className='icons4'>Live</div>
                            <div className='icons5'>Computer Science</div>
                            <div className='icons6'>Bolliwood Music</div>
                            <div className='icons7'>Python</div>
                            <div className='icons8'>Live</div>
                            <div className='icons9'>Tamil Cinema</div>
                            <div className='icons10'>Movies</div>
                            <div className='icons11'>CID</div>
                            <div className='icons12'>Indian Pop-Music</div>
                            <div className='icon-scroll'></div>
                    </div> </div>
           <div className="video">
           {
            videos.map(function(video){
                return <VideoPreviewComponent 
                title={video.title}
                thumbnail={video.thumbnail.url}
                channelName={video.channelName}
                viewCount={video.views}
                uploded={video.uploadedAt}
                id={video.id}
             />

            })
           }
               <div className="video1">
               <VideoPreviewComponent   title=" this is 1st video" thumbnail={"https://i.ytimg.com/vi/HF-nGmIeoGU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAv8BtHZLUmH5jc94Fk5v4FvrDuVg"}
               channelName="harsh mohan" viewCount="1.3M views . 18 hours ago" logo={"https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s88-c-k-c0x00ffffff-no-rj"} />
                                         
               </div>
               <div className="">
               <VideoPreviewComponent  thumbnail ={"https://yt3.googleusercontent.com/enyLBm1Sy8mVRXJJLWHT2z64nqxJGt2g61A9xnxpUjO2YAUovHaY_JT3rnAg0j6Qij9iaHQlAg=s176-c-k-c0x00ffffff-no-rj"}
               title=" this is 1st video" channelName="Mrwhosetheboss" viewCount="16.9M"/>;

               </div>
               </div>
               
           
       </div>



   </div>
   
    )
}
export default HomeComponent;