import React from 'react'
import InteractionBar from './interactionBar';
import SubscribtionBar from './SubscribtionBar';
import Comment from './Comment';
import"../css/videoPage.css"

function BelowVideo(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <InteractionBar />
        <SubscribtionBar channel={props.channel} channelImg={props.channelImg} />
        <Comment />


    </div>
  )
}

export default BelowVideo