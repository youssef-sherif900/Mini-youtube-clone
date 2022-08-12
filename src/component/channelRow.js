import { Avatar } from '@mui/material'
import React from 'react'
import"../css/ChannelRow.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function channelRow(props) {
  return (
    <div className='channelRow'>
    <Avatar className='channelRow__logo' src={props.image} />
    <div className='channelRow__text' >
        <h4>{props.channel}{props.verfied&&<CheckCircleOutlineIcon/>}</h4>
        <p>{props.sub} subscribers . {props.noOfVideos} videos</p>
        <p>{props.description}</p>
    </div>
    </div>
  )
}

export default channelRow