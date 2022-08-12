import { Avatar } from '@mui/material'
import"../css/videoPage.css"
import React, { useEffect, useState } from 'react'
// import CommentBtn from './CommentBtn'
import CommentText from  './CommentText'
import { useLocation } from 'react-router-dom';
import videoData from '../Data/videoData'
import moment from 'moment'
import Picker from 'emoji-picker-react';
import MoodIcon from '@mui/icons-material/Mood';
import {Box, Button, ClickAwayListener,} from '@mui/material'



function Comment() {

  const location = useLocation();
  let str =location.pathname;
  let videoId=str.substring(7);


  const[ comment,setComment]= useState("")
  const[expand,setExpand]= useState(false);
  const[comment_buttons,setComment_Button]=useState(false)
  

  let commentId =   videoData.filter((data)=>
  {return (data.videoId === videoId) })
  

  commentId = commentId[0].Comment
 

function handleExpnad(){
  setExpand(true)
}

useEffect(()=>{
  if(comment===""){
       setComment_Button(false)
      
     } else{
       setComment_Button(true)
     }
   },[comment])

function handelCommentChange(e){
  setComment(e.target.value)

}

function closeComment(){
  setExpand(false);
}
function handleClick(event){

commentId.unshift({comment:comment,commentDate:moment()});
console.log(commentId);
  setComment("")

}

 // buttons functions




 const [chosenEmoji, setChosenEmoji] = useState("");
 const [open, setOpen] = useState(false);
 





 const handleTooltipOpen = () => {
     setOpen(true);
   };

   const handleTooltipClose = () => {
     setOpen(false);
   };

   const onEmojiClick = (event, emojiObject) => {
       setChosenEmoji(emojiObject.emoji);
       setComment((prev)=>{return(prev + emojiObject.emoji)});
   };





  return (
    <div>
    <div className='comment'>
    <Avatar/>
    <input type="textarea" className='comment-input' placeholder='Add a comment...'
    value={comment} onClick={handleExpnad}  onChange={handelCommentChange}
     />
      </div>








      

                          {/* comment buttons */}



{expand&&<div className='comment_buttons'>


<div className='emoji'>
    <ClickAwayListener onClickAway={handleTooltipClose}>
   
    <Box>
    <MoodIcon onClick={handleTooltipOpen} />
      {open&&<Picker onEmojiClick={onEmojiClick}  />}
    </Box>
   

</ClickAwayListener>
</div>




         <div  >
    <Button onClick={closeComment}>cancel</Button>
   { comment_buttons
   ?<Button variant="contained" onClick={handleClick}>comment</Button>
   :<Button variant="contained" disabled>comment</Button>}
    </div>

    


    </div>}




{/* {expand && <CommentBtn  active={comment_buttons} expand={closeComment} handleClick={handleClick} /> } */}
  

   
   <div className='commentText_section'>
   
   {

    commentId.map((item)=>{
  return(
    <CommentText text={item.comment} moment={item.commentDate} />
  )
})
    
}
</div>


    </div>
  )
}

export default Comment ;