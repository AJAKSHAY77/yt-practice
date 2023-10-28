import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuopen = useSelector((store) => store.app.isMenuopen);
  
  if(!isMenuopen)return null

  return (
    <div className=" p-5 shadow-lg w-48 ">
      <h1 className="font-bold py-3">Subscriptions</h1>

      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <div className="bg-black w-full h-0.5 mt-2"></div>

      <h1 className="font-bold py-3">News</h1>

      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <div className="bg-black w-full h-0.5 mt-2"></div>
      <h1 className="font-bold  py-3">Videos</h1>

      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <div className="bg-black w-full h-0.5 mt-2"></div>
      <h1 className="font-bold py-3">Likes</h1>

      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
    </div>
  );
}

export default Sidebar