import { useState } from 'react'

function ClientInputForm() {
  return (
    <>
      <div id='ClientInputForm'>
        <h1>Add New Client</h1>
        <form action="/client-workspace" method="post">
          <p>Client Information</p>
          <label>Client Name</label>
          <input>John Doe</input>
          <label>Company name *</label>
          <input>Acme Corperation</input>
          <label>Email *</label>
          <input>john@acme.com</input>
          <label>{"Phone (optional)"}</label>
          <input>{"+1 (555) 123-4567"}</input>
          <p>Project Setup</p>
          <label>Project Name</label>
          <input>Website Redesign</input>
          <label>Status</label>
          <input></input>
          <a href='/client-workspace'><button>Cancel</button></a>
          <button type="submit">Create Client</button>
        </form>
      </div>
    </>
  )
}

export default ClientInputForm
