import React, { useEffect, useState } from 'react'
import { VIDEO_API } from '../utils/Constant'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'
import { Addvideocard } from './VideoCards'



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
    <div className="flex flex-wrap">
      {/* <VideoCards info={Videos[0]}/> */}
      {Videos[0] && <Addvideocard info={Videos[0]}/>}

      {Videos.map((videolist) => (
        <Link to={"/watch?v="+videolist.id}>
          <VideoCards key={videolist.id} info={videolist} />
         </Link>
      ))}
    </div>
  );
}

export default VideoContainer