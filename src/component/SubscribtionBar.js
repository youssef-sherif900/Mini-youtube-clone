import { Avatar, Button } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import"../css/videoPage.css"
import React,{useState} from 'react'

function SubscribtionBar(props) {
    const[subscribe,setSubscribe]=useState("SUBSCRIBE")
    const[checkMark,setCheckMark]= useState(false)
function checkSubscribtion(){
    if(subscribe ==="SUBSCRIBE"){
        setSubscribe("SUBSCRIBED");
        setCheckMark(true)
} else{
    setSubscribe("SUBSCRIBE");
    setCheckMark(false)
}
    
}

  return (
    
    <div className='subarea'>
    <div className='channelDiv'>
    <Avatar style={{height:"35px",width:"35px"}} src={props.channelImg} />
    <h4>{props.channel}</h4>
    </div>
 
  <Button  endIcon={checkMark&&<NotificationsActiveIcon/>} onClick={checkSubscribtion}
  variant='contained'
  style={checkMark?{backgroundColor:"grey",height:"40px"}:{backgroundColor:"red",height:"40px"}}
  >{subscribe}
    
  </Button>

</div>
  )
}

export default SubscribtionBar