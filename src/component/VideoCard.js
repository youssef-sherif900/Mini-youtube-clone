import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import "../css/videocard.css"


function videoCard(props) {





  return (

    <div className='videoCard'>
    <Link to={`/video/${props.videoKey}`}>
    <img className='videoCard__ThumNail' src={props.image} alt="none" />
    </Link>

        
        <div className='video__info'>
            <Avatar className='videoCard__avatar' src={props.channelImage} />
            <div className='video__text'>
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

export default videoCard