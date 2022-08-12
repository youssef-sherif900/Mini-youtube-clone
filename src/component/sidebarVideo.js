import React from 'react'
import { Link } from 'react-router-dom'
import"../css/sidebarVideo.css"


function sidebarVideo(props) {
  return (
    <div className='sidebarVideo'>
    <Link to={`/video/${props.videoKey}`}>
    <img  src={props.image} alt="error" />
    </Link>
        <div className='content' >
            <div>
             <h4>{props.title}</h4>
             
             <p>{props.channel}</p>
             <p>
                {props.views}  {props.timestamp}
             </p>
            </div>
        </div>
    </div>
  )
}

export default sidebarVideo