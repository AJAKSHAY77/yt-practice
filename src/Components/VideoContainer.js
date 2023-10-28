import React, { useEffect, useState } from 'react'
import { VIDEO_API } from '../utils/Constant'
import VideoCards from './VideoCards'



const VideoContainer = () => {
  const[Videos , setVideos]= useState([])

  useEffect(() => {
    getvideos()
  }, [])
  
  const getvideos = async () => {
    const response = await fetch(VIDEO_API)
    const data = await response.json()
    // console.log(data.items);
    setVideos(data.items)
  }
  return (
    <div>
      <VideoCards info={Videos[0]} />
    </div>
  )
}

export default VideoContainer