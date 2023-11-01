import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom' 
const Watchpage = () => {
    const [searchParam] = useSearchParams()
  console.log(searchParam.get("v"));   
const Dispatch = useDispatch()
    useEffect(() => {
         Dispatch(closemenu())
     })
  return (
    <div className="px-5">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+searchParam.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Watchpage