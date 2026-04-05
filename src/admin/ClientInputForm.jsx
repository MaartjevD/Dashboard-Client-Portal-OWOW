import { useParams } from "react-router-dom";
import { useState } from 'react'
import './ClientWorkspace.css'
// import { data } from "./main";
// import GetData from "../shared/data.jsx";
// let route = GetData

let form;
let iId;
let iHeader;
let iName;
let iCompany;
let iMail;
let iPhone;
let status;
let newProject;
let checkbox;
let checked = false;
let checked2 = false;
let bCancel;
let bCreate;


export default function ClientInputForm({ data }) {
  // get data from the url and the dataset delivered by main and apply it to clients.
  let { clientId } = useParams()
  const [client, setClient] = useState(data.clients.filter(c => c.key === parseInt(clientId))[0])??undefined
  // SetForm(clientId, client, data);
  // iId = <input type="hidden" name="client-id" value={clientId} />
  // iHeader = (!clientId && "Add new client") || (clientId && "Edit " + client.name)
  // iName = 
  //   clientId
  //   && <input name='client-name' placeholder='John Doe' defaultValue={client.name} readOnly />
  //   || <input name='client-name' placeholder='John Doe' />;
  // iCompany = <input name='company-name' placeholder='Acme Corperation' defaultValue={client ? client.company : ""} />
  // iMail = <input name='email' placeholder='john@acme.com' defaultValue={client ? client.email : ""} />
  // iPhone = <input name='phone' placeholder="+1 (555) 123-4567" defaultValue={client ? client.phone : ""} />
  // status = (clientId && (
  //   <>
  //     <label>Status</label>
  //     <select name='status' placeholder='' disabled value={client ? client.projects.length == 0 ? "prospect" : data.projects.filter(p => p.status === "in progress" && p.clientId === clientId).length > 0 ? "active" : "inactive" : "choose..."}>
  //       <option value="choose..." hidden></option>
  //       <option value="active">Active</option>
  //       <option value="inactive">Inactive</option>
  //       <option value="prospect">Prospect</option>
  //     </select>
  //   </>
  // )) || (!clientId &&  <input type="hidden" name='status' value="prospect" /> );
  // checkbox = setCheckbox();
  // checkbox = <input type="checkbox" onClick={()=>{checked = !checked; }} className="col-1" id='create-project' name='create-project' checked />
  // newProject = !clientId && (
  //   <>
  //     <label htmlFor="create-project" className="col-3">Create Project</label>
  //     {checkbox}
  //   </>
  // )
  // bCancel = <a href='/admin/#/clients' className='button col-3'><button name="cancel" className='button col-12' type="button"> Cancel</button></a>
  // bCreate = setCreateButton();
  // bCreate = <button id="create" name="create" type="submit" className='button-inversed col-3'>To project creation</button>

  // let i = 0;
  // window.setInterval(() => {
  //   if ((checked = document.querySelector('#create-project').checked) != checked2) {
  //     // console.log(i,checkbox.props)
  //     // checkbox = setCheckbox();
  //     // bCreate = setCreateButton();
  //     // console.log(i++,checkbox.props)
  //     console.log(checked, checked2);
  //     checked2 = checked;
  //     document.querySelector('#client-input-form').action = checked ? "/admin/#/projects/add/1/bob/ross" : "/admin/#/clients";
  //     console.log(document.querySelector('#client-input-form').action);
  //   }
  // }, 500);

  // this is what will be shown on the page
  return (
    <form id="client-input-form" method='put' action='/admin/#/clients'>
      {/* {iId} */}
      <input type="hidden" name="client-id" value={clientId} />
      <h1 id='input-header'>
        {/* show "name" followed by the name of the client or "add new client" if there is no client */}
        {/* {iHeader} */}
        {(!clientId && "Add new client") || (clientId && "Edit " + client.name)}
      </h1>
      <div id='ClientInputForm'>
        <p className='input-section'>Client Information</p>
        <label>Client Name</label>
        {/* show a readonly input if editing an existing client or an empty input if adding a new client */}
        {/* {iName} */}
        {
          clientId
            && <input name='client-name' placeholder='John Doe' defaultValue={client.name} readOnly />
            || <input name='client-name' placeholder='John Doe' />
        }
        <label>Company name *</label>
        {/* {iCompany} */}
        <input name='company-name' placeholder='Acme Corperation' defaultValue={client ? client.company : ""} />
        <label>Email *</label>
        {/* {iMail} */}
        <input name='email' placeholder='john@acme.com' defaultValue={client ? client.email : ""} />
        <label>Phone (optional)</label>
        {/* {iPhone} */}
        <input name='phone' placeholder="+1 (555) 123-4567" defaultValue={client ? client.phone : ""} />
        <p className='input-section'>Project Setup</p>
        {/* show a readonly select if editing an existing client or add a hidden input field with a default value if adding a new client */}
        {/* {status} */}
        {
          (clientId && (
            <>
              <label>Status</label>
              <select name='status' placeholder='' disabled value={client ? client.projects.length == 0 ? "prospect" : data.projects.filter(p => p.status === "in progress" && p.clientId === clientId).length > 0 ? "active" : "inactive" : "choose..."}>
                <option value="choose..." hidden></option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="prospect">Prospect</option>
              </select>
            </>
          )) || (!clientId &&  <input type="hidden" name='status' value="prospect" /> )
        }
        {/* show a checkbox to create a project if adding a new client */}
        <div className="row col-12">
          <label htmlFor="create-project" className="col-3">Create Project</label>
          {/* {newProject} */}
          <input type="checkbox" onClick={changeAction()} className="col-1" id='create-project' name='create-project' />
        </div>
        <div id='input-buttons' className="row">
          {/* {bCancel} */}
          <a href='/admin/#/clients' className='button col-3'><button name="cancel" className='button col-12' type="button">Cancel</button></a>
          {/* {bCreate} */}
          <button id="create" name="create" type="submit" className='button-inversed col-3'>Create client</button>
        </div>
      </div>
    </form>
  )
}

// export function setCheckbox(){
//   // document.querySelector('input[name="create"]').innerText = checked ? "Create Client" : "";
//   return checked
//   ? <input type="checkbox" onClick={()=>{checked = !checked; }} className="col-1" id='create-project' name='create-project' checked />
//   : <input type="checkbox" onClick={()=>{checked = !checked; }} className="col-1" id='create-project' name='create-project' />
// }

// function setCreateButton(){
//   return checked
//   ? <button id="create" name="create" type="submit" className='button-inversed col-3'>To project creation</button>
//   : <button id="create" name="create" type="submit" className='button-inversed col-3'>Create Client</button>
// }

function SetForm(clientId, client, data) {
};

export function changeAction() {
  window.setInterval(() => {
    if ((checked = document.querySelector('#create-project').checked) != checked2) {
      document.querySelector('#client-input-form').action = checked ? "/admin/#/projects/add/1/bob/ross" : "/admin/#/clients";
      document.querySelector('#create').innerText = checked ? "Go to project creation" : "Create client";
      checked2 = checked;
    }
  }, 500);
  // let checkbox = document.querySelector('input[name="create-project"]')
  // if (checkbox.checked == true)
  //   checkbox = <input type="checkbox" onClick={changeAction()} className="col-1" name='create-project' checked />
  // else checkbox = <input type="checkbox" onClick={changeAction()} className="col-1" name='create-project' />
  // let name = document.querySelector('input[name="client-name"]')
  // let company = document.querySelector('input[name="company-name"]')
  // if (checkbox.checked) {
  //   form.action = `/admin/#/projects/add/${data.clients.last().key + 1}/${name}/${company}`
  // } else {
  //   form.action = '/admin/#/clients'
  // }
  // return;
}