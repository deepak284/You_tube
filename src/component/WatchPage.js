import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
  
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(()=> {dispatch(closeMenu())}
  ,[dispatch])



  return (
    <div className='px-5'>
      <iframe width="1200" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage