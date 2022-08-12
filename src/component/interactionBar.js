import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import IconButton from '@mui/material/IconButton';
import"../css/videoPage.css";

function InteractionBar() {
  return (
    <div className='interactionBar'>
    <div className='interaction_icon'><IconButton><ThumbUpOffAltIcon /></IconButton><p>104</p></div>
    <div className='interaction_icon'><IconButton><ThumbDownOffAltIcon /></IconButton> <p>Dislike</p></div>
    <div className='interaction_icon'><IconButton><ReplyOutlinedIcon /></IconButton> <p>share</p></div>
    <div className='interaction_icon'><IconButton><FileDownloadOutlinedIcon /></IconButton><p>Download</p></div>
    <div className='interaction_icon'><IconButton><ContentCutOutlinedIcon /></IconButton><p>Clip</p></div>
    <div className='interaction_icon'><IconButton> <PlaylistAddOutlinedIcon /></IconButton><p>Save</p></div>
    <div className='interaction_icon'><IconButton><MoreHorizOutlinedIcon /></IconButton></div>
    </div>
  )
}

export default InteractionBar