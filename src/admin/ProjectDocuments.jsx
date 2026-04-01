import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Project.css'
import DocumentCard from './DocumentCard.jsx'
import icon from '../assets/Form.svg'
import GetData from "../shared/data.jsx";
let route = GetData


function ProjectDocuments() {
  let { projectId } = useParams()
  const [documents, setDocuments] = useState(route.documents)
  const Documents = documents.filter(doc => doc.projectId === parseInt(projectId)).map(document => <DocumentCard document={document} />)

  return (
    <>
      {/* <div className='row'>
        <h2 className='col-10'>Documents</h2>
        <a className='col-2 rowspan-2' href={`/admin/#/projects/${projectId}/Documents/add`}>
          <button className='button-inversed'>
            <img src={icon} /> Add Document
          </button>
        </a>
        <p className='col-10'>Select a document to access its details</p>
      </div>
      <div id='client-card-collection' className='row'>
        {Documents}
      </div> */}
      <div className='row text-white'>
        <div className="row col-10">
          <h2 className='col-10'>Documents</h2>
          <p className='col-10'>Select a document to access its details</p>
        </div>
        <a className='col-2' href={`/admin/#/projects/${projectId}/Documents/add`}>
          <button className='button-inversed'>
            <img src={icon} /> Add Document
          </button>
        </a>
      </div>
      <div className='row gap-4'>
        {Documents}
      </div>
    </>
  )
}

export default ProjectDocuments
