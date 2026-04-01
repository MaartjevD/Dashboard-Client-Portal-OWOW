// import { useState } from 'react'
import button from '../assets/Button.png'

function ClientCard({client, data}) {
  let key = client.key
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
        <p className='client-card-name'>{name}</p>
        <p className='client-card-company'>{company}</p>
        <p className='client-card-project-count'>{projects} projects</p>
        <p className={'client-card-project-update ' + (update_checked ? 'client-card-update-read' : 'client-card-update-unread')}>{update}</p>
        <a href={`/admin/#/clients/${key}/edit`}><img className='client-card-settings-image' src={button} /></a>
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

export default ClientCard
