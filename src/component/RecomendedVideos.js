import React from 'react'
import "../css/RecommendedVideos.css"
import VideoCard from "./VideoCard.js"
import videoData from '../Data/videoData.js'




function RecomendedVideos() {




function readData(data){


  return(
    <VideoCard
    id={data.id}
    key={data.id}
    image={data.image}
    channelImage={data.channelImage}
    title={data.title}
    channel={data.channel}
    views={data.views}
    timestamp={data.timestamp}
    videoKey={data.videoId}
     />
  )
}


  return (
    <div className='recommendedvideos'>
    {/* <h1>Recommended</h1> */}
    <div className='recommendedvideos__videos'>
    {videoData.map(readData)}
    </div>
    </div>
  )
}

export default RecomendedVideos