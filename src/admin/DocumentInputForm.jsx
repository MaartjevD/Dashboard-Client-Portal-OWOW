import { useState } from 'react'
import './ClientWorkspace.css'

function ClientInputForm() {
  return (
    <>
      <form action="/admin/#/clients" method='get'>
        <h1 id='input-header'>Add New document</h1>
        <div id='ClientInputForm'>
          <p className='input-section'>Document Information</p>
          <label>Client Name</label>
          <input placeholder='John Doe' />
          <label>Company name *</label>
          <input placeholder='Acme Corperation' />
          <label>Email *</label>
          <input placeholder='john@acme.com' />
          <label>Phone (optional)</label>
          <input placeholder="+1 (555) 123-4567" />
          <p className='input-section'>Project Setup</p>
          <label>Project Name</label>
          <input placeholder='Website Redesign' />
          <label>Status</label>
          <input placeholder='' />
          <div id='input-buttons'>
            <a href='/admin/#/clients'><button className='button'> Cancel</button></a>
            <button type="submit" className='button-inversed'>Create Client</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ClientInputForm
