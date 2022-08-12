import React from 'react'
import"../css/videoRaw.css"

function VideoRow(props) {
  return (
    <div className='videoRaw'>
        <img src={props.image} alt='error'/>
        <div className='videoRow__text'>
            <h3>{props.title}</h3>
            <p className='videoRow__headline'>
                {props.channel} .
                <span className='videoRow__subs'>
                <span className='videoRow__subNo' >{props.sub} </span>subscribers
                </span>
                  {props.views} views {props.timeStamp}
            </p>
            <p className='videoRow__description' >{props.description}</p>
        </div>
    </div>
  )
}

export default VideoRow