import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({list}) => {
    const {id}=useParams()
    const movie=list.find(el=>el.id==id)
  return (
    <div className='video'>
 
    <iframe width="560" height="315" src={movie.Video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    </div>
  )
}

export default Detail
