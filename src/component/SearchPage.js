import React from 'react'
import"../css/searchPage.css"
import TuneIcon from '@mui/icons-material/Tune';
// import channelRow from './channelRow';
import videoData from '../Data/videoData.js';
function SearchPage() {
  function findVideos(info){
    <videoRow
    key={info.id}
      image={info.image}
      title={info.title}
      channel={info.channelImage}
      // sub={info.sub}
      views={info.views}
      timeStamp={info.timestamp}
      // description={info.description}
    />
  }
  return (
    <div className='searchPage'>
    <div className='searchPage__Filter'>
      <TuneIcon />
      <h2>FILTER</h2>
    </div>   
    <hr/>
    <channelRow />
    <hr/>
    {videoData.map(findVideos)}
    </div>
  )
}

export default SearchPage