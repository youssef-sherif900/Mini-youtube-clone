import React from 'react'
import YouTube from 'react-youtube';
import"../css/videoPage.css"
import { useLocation } from 'react-router-dom';
import SidebarVideos from './SidebarVideos';
import videoData from '../Data/videoData';
import BelowVideo from './BelowVideo';





function Video(props) {

  // https://bobbyhadz.com/blog/react-router-get-current-route

  const location = useLocation();

  // console.log('pathname', location.pathname);
  let str =location.pathname;
 let videoId=str.substring(7);

    const opts = {
        height: '480', 
        width: '850',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

  return (
    <div className='video_page'>
    <div>
        <YouTube videoId={videoId} opts={opts} />

        {   videoData.filter((data)=>
        {return (data.videoId === videoId) }).map((data)=>{
          return<BelowVideo
           title={data.title}
            channel={data.channel} 
            channelImg={data.channelImage}
            />
          })
    } 
        
    </div>
       <SidebarVideos />
    </div>
  )
}

export default Video
