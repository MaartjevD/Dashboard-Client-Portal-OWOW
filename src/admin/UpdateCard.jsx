import { useState } from 'react'
import button from '../assets/Button.png'

function UpdateCard({update, project}) {
  console.log(update)
  let id = update.key
  let projectName = project.name
  let title = update.title
  let content = update.content
  let date = update.date
  let checked = update.checked
  return (
    <>
      <div className='update-card'>
        <div id={`update-card-${id}`} className={`update-card-status ${(checked ? 'update-card-read' : 'update-card-unread')}`}></div>
        <p className='update-card-title'>{title}</p>
        <a href='' className='update-card-edit'></a>
        <a href='' className='update-card-delete'></a>
        <div className='update-card-details'>
          <p className='update-card-project'>{projectName}</p>
          <p>•</p>
          <p className='update-card-date'>{date}</p>
        </div>
        <p className='update-card-content'>{content}</p>
      </div>
      {/* <div className='col-12 container'>
        <p className='col-2 client-card-image'>{acronym}</p>
        <p className='col-9 client-name'>{name}</p>
        <p className='col-11 client-company'>{company}</p>
        <p className='col-11 client-project-count'>{projects} projects</p>
        <p className={'col-10 client-project-update ' + (update_checked ? 'client-update-read' : 'client-update-unread')}>{update}</p>
        <a href='' className='col-1 client-settings-image'><img src={button} /></a>
      </div> */}
    </>
  )
}

export default UpdateCard
