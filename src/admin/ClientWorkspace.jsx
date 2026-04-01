import { useState } from 'react'
import { useParams } from "react-router-dom"
import './ClientWorkspace.css'
import ClientCard from './ClientCard.jsx'
import icon from '../assets/Form.svg'


export default function ClientWorkspace({ data }) {
  const [clients, setClients] = useState(data.clients)
  const Clients = clients.map(client => <ClientCard client={client} data={data} />)
  let { clientId } = useParams()
  console.log(clientId)

  return (
    <>
      <div className='row'>
        <h2 className='col-10'>Clients</h2>
        <a className='col-2 rowspan-2' href='/admin/#/clients/add'>
          <button className='button-inversed'>
            <img src={icon} /> Add Client
          </button>
        </a>
        <p className='col-10'>Select a client to access their workspace</p>
      </div>
      <div id='client-card-collection' className='row'>
        {Clients}
      </div>
    </>
  )
}

export async function action({ request }) {
  console.log("form submitted", request);
  const formData = await request.formData();
  let name = formData.get('client-name');
  let company = formData.get('company-name');
  let email = formData.get('email');
  let phone = formData.get('phone');
  let projectName = formData.get('project-name');
  let status = formData.get('status');
  console.log(name, company, email, phone, projectName, status);
}