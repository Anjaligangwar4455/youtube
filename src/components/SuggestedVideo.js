import "./VideoPage.css"
function SuggestedVideo(props) {
  const title = props.title;
  const cname = props.channelName;
  const link = props.thumbnail.url;
  const Dura = props.Dura;
  
   return (
     
    <div class="video11">
    <div id="videe">
        <img src={link}
            height="100%" width="100%" />
    </div>
    <div id="otht">
        <div id="tile"><b>{title}</b></div>
        <div id="cn">{cname}</div>
        <div id="ct">{Dura}</div>
    </div>
</div>
);
     
   
 }

 export default SuggestedVideo;