import { useState } from 'react'
import extend from '../assets/Extend.svg'
import link from '../assets/Link.svg'

function DocumentCard({document}) {
  let name = document.name;
  let description = document.description;
  let type = document.type;
  let source = document.source;
  let status = document.status;
  return (
    <>
      {/* <div className='document-card'>
        <img className={`document-card-type doctype-${type}`} src={link} />
        <h2 className='document-card-name'>{name}</h2>
        <p className='document-card-description'>{description}</p>
        <div className="document-card-status row">
          <p className='col-4'>{source.name}</p>
          <hr className='col-4' />
          <p className='col-4'>{status}</p>
        </div>
        <button href={source.url} className='col-12 button-inversed document-card-open'>
          <img className='document-card-settings-image' src={extend} /> Open in Jira
        </button>
      </div> */}
      <div className='row col-6 text-white'>
        <div className={`document-card-type col-2 doctype-${type.toLowerCase()}`} />
        <div className="col-10 row">
          <h2 className='col-12'>{name}</h2>
          <p className='col-12'>{description}</p>
          <div className="col-12 row document-status">
            <p className='col-3'>{source.name}</p>
            • <div className='col-3 document-line' /> •
            <p className='col-3'>{status}</p>
          </div>
        </div>
        <button href={source.url} className='col-12 button-inversed document-card-open'>
          <img className='document-card-settings-image' src={extend} /> Open in Jira
        </button>
      </div>
    </>
  )
}

export default DocumentCard
