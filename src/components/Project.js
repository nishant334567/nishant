import React from 'react'
import Cards from './Cards'
import './Project.css'



function Project() {
  return (
    <>
    <hr></hr>
    <div className='projects-heading'>
        <h2>Projects</h2>
    </div>
    <div className='projects'>
        <Cards link='http://nishant-thakur.herokuapp.com' tech="ReactJS HTML CSS" title="My Portfolio" description="I made my own portfolio website using the above technologies. " />
        <Cards link='https://bit.ly/nishant-crud-app' tech="Express NodeJS MongoDB" title="CRUD App" description="I made this basic CRUD application during my placements, to put it in my resume. User can Create, Update and Delete post with Authentication feature."/>
    </div>
    </>
  )
}

export default Project