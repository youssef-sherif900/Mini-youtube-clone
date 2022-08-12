import React from 'react'
import SidebarVideo from './sidebarVideo'
import VideoData from "../Data/videoData"
import"../css/sidebarVideo.css"
function sidebarVideos() {
    function readData(data){

      
        return(
            <SidebarVideo
            key={data.id}
            image={data.image}
            title={data.title}
            channel={data.channel}
            views={data.views}
            timestamp={data.timestamp}
            videoKey={data.videoId}
             />
        )
    }
  return (
    <div className='sidebarVideos'>
      {VideoData.map(readData)}
    </div>
  )
}

export default sidebarVideos