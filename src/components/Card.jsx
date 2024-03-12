import React from 'react'
import { useNavigate } from 'react-router-dom'
function Card(props) {
  const navigate = useNavigate();
  return (
    <>
    <div className='card'>
        <div className='card-title'>{props.title}</div>
        <div className='card-image'><img src={props.img} /></div>
        <div className="btn"><button>Save</button> <span className="edit"><button onClick={e => navigate(`/edit?url=${props.img}`)}>Edit</button></span></div>
    </div>
    </>
  )
}

export default Card