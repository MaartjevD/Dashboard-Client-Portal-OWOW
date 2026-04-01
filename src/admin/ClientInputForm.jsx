import { useParams } from "react-router-dom";
import { useState } from 'react'
import './ClientWorkspace.css'
// import { data } from "./main";
// import GetData from "../shared/data.jsx";
// let route = GetData

export default function ClientInputForm({ data }) {
  let { clientId } = useParams()
  console.log(data.clients)//.clients.filter(c => c.key === parseInt(clientId))[0]??undefined)
  const [client, setClient] = useState(data.clients.filter(c => c.key === parseInt(clientId))[0]??undefined)
  // console.log(client)
  return (
    <>
      <form method='put'>
        <input type="hidden" name="client-id" value={clientId} />
        <h1 id='input-header'>
          {(clientId && "Add new client") || (!clientId && "Edit " + client.name)}
        </h1>
        <div id='ClientInputForm'>
          <p className='input-section'>Client Information</p>
          <label>Client Name</label>
          {
            clientId
            && <input name='client-name' placeholder='John Doe' defaultValue={client.name} readOnly />
            || <input name='client-name' placeholder='John Doe' />
          }
          <label>Company name *</label>
          <input name='company-name' placeholder='Acme Corperation' defaultValue={client ? client.company : ""} />
          <label>Email *</label>
          <input name='email' placeholder='john@acme.com' defaultValue={client ? client.email : ""} />
          <label>Phone (optional)</label>
          <input name='phone' placeholder="+1 (555) 123-4567" defaultValue={client ? client.phone : ""} />
          <p className='input-section'>Project Setup</p>
          <label>Project Name</label>
          <input name='project-name' placeholder='Website Redesign' defaultValue={client ? client.name : ""} />
          <label>Status</label>
          {(clientId && (
            <select name='status' placeholder='' disabled value={client ? client.projects.length == 0 ? "prospect" : data.projects.filter(p => p.status === "in progress" && p.clientId === clientId).length > 0 ? "active" : "inactive" : "choose..."}>
              <option value="choose..." hidden></option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="prospect">Prospect</option>
            </select>
          )) || (!clientId && (
            <select name='status' placeholder='' defaultValue={"choose..."} disabled>
              <option value="choose..." hidden></option>
            </select>
          ))}
          <div id='input-buttons' className="row">
            {!clientId && (
              <>
                <label htmlFor="create-project" className="col-3">Create Project</label>
                <input type="checkbox" className="col-1" name='create-project' />
              </>
            )}
            <button name="cancel" className='button col-3' type="button" href='/admin/#/clients'> Cancel</button>
            <button name="finish" type="submit" className='button-inversed col-3'>Create Client</button>
          </div>
        </div>
      </form>
    </>
  )
}

