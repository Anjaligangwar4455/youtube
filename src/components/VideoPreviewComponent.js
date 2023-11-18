import {Link} from 'react-router-dom';
function VideoPreviewComponent(props){
   const title = props.title;
   const channelName=props.channelName;
   const viewCount=props.viewCount;
   const logo=props.logo;
   const thumbnail= props.thumbnail;
   const id = props.id;
    return (
        <div>
<div className="video1-1">
   <Link to={"/video/" + id}>
<img src={thumbnail}
 height= "162.5px" width="400px" /> </Link>
</div>
<div className="video1-2">
<div className="video1-2-1">
   <img src={logo }
   height="40px" width="55px"  border-radius="100px"  />
</div>
<div className="video1-2-2">
   {title}

</div>
</div>
<div className="video1-3"> <b> {channelName}</b> </div>
<div className="video1-4"> {viewCount}</div > </div>); 

}
export default VideoPreviewComponent; 