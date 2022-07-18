import React from 'react'
import './Cards.css'
import ProjImage from '../images/dev-icon.jpg'
function Cards(props) {
  return (
    <div className='cards'>
        <div className='card-image'>
            <img src={ProjImage}/>
        </div>
        <div className='card-body'>
            <h2 className='card-title'>{props.title}</h2>
            <h4 className='card-tech_stack'>{props.tech}</h4>
            <p className='card-description'>{props.description}</p>
            <div className='view-project'>
            <a href={props.link}>View</a>
        </div>
        </div>
        
    </div>
  )
}

export default Cards