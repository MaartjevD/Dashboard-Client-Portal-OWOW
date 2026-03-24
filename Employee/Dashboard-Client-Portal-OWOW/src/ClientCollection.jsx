import { useState } from 'react'
import './ClientWorkspace.css'
import ClientCard from './ClientCard.jsx'
import icon from './assets/Icon.png'


function ClientCollection() {
  const [clients, setClients] = useState([
    { name: "Sarah Johnson", company: "TechCorp Solutions", projects: "3", update: "Updated 5 days ago", update_checked: false },
    { name: "Michael Chen", company: "Innovate Inc.", projects: "2", update: "Updated 5 hours ago", update_checked: true },
    { name: "Emma Williams", company: "Bright Future", projects: "1", update: "Updated 1 day ago", update_checked: true },
    { name: "David Martinez", company: "NextStep Digital", projects: "4", update: "Updated 5 days ago", update_checked: false },
    { name: "Lisa Anderson", company: "Quantum Labs", projects: "2", update: "Updated 2 days ago", update_checked: true },
    { name: "James Taylor", company: "Vertex Group", projects: "1", update: "Updated 4 hours ago", update_checked: true }
  ])

  return (
    <>
      <div id='client-header'>
        <h2 id='client-header-head'>Clients</h2>
        <p id='client-header-desc'>Select a client to access their workspace</p>
        <a href='client-input'>
          <button id='client-header-button'>
            <img src={icon} /><p>Add Client</p>
          </button>
        </a>
      </div>
      <div id='client-collection'>
        <ClientCard client={clients[0]} />
        <ClientCard client={clients[1]} />
        <ClientCard client={clients[2]} />
        <ClientCard client={clients[3]} />
        <ClientCard client={clients[4]} />
        <ClientCard client={clients[5]} />
      </div>
    </>
  )
}

export default ClientCollection
