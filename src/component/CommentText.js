import { Avatar } from '@mui/material'
import React from 'react'
import Moment from 'react-moment'
import"../css/videoPage.css"
function CommentText(props) {
  return (
    
    <div className='commentArea'>
        <Avatar/>
        <div className='primaryText'>
        <div className='commentDate'>
           <h4 className='userNickname'>joe900</h4>
           <Moment className='DateStyle' fromNow>{props.moment}</Moment>
        </div>
        <div className='comment_message'>
          {props.text}
          </div>
        </div>
 
    </div>
    
  )
}

export default CommentText