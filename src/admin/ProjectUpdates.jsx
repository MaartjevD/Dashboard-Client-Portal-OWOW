import { useState } from 'react'
import { useParams } from 'react-router-dom'
import UpdateCard from './UpdateCard.jsx' 
import './Project.css'


function ProjectUpdates({ data }) {
  let { projectId } = useParams()
  const [updates, setUpdates] = useState(data.updates)
  const Updates = updates.filter(u => u.projectId === parseInt(projectId)).map(u => <UpdateCard update={u} project={data.projects.filter(p => p.key === u.projectId)[0]} />)

  let element = (
    <div id='update-card-collection' className='container'>
      {Updates}
    </div>
  )
  return element
}

export default ProjectUpdates
