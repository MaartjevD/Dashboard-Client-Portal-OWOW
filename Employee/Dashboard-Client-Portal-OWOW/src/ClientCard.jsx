import { useState } from 'react'
import button from './assets/Button.png'

function ClientCard({client}) {
  console.log(client);
  let name = client.name
  let company = client.company
  let projects = client.projects
  let update = client.update
  let update_checked = client.update_checked
  let acronym = name[0] + name[name.indexOf(" ") + 1]
  return (
    <>
      <div className='client-card'>
        <h2 className='client-card-image'>{acronym}</h2>
        <p className='client-name'>{name}</p>
        <p className='client-company'>{company}</p>
        <p className='client-project-count'>{projects} projects</p>
        <p className={'client-project-update ' + (update_checked ? 'client-update-read' : 'client-update-unread')}>{update}</p>
        <a href=''><img className='client-settings-image' src={button} /></a>
      </div>
    </>
  )
}

export default ClientCard
