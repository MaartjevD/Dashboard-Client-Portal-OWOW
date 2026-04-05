// these are react components that make up the admin dashboard. They are imported and rendered in main.jsx, which is the entry point for the admin dashboard. Each component is responsible for rendering a specific part of the dashboard, such as the client workspace, project updates, or document input form. The components use React Router to navigate between different pages of the dashboard, and they use state to manage data and user interactions. The components also import CSS files for styling and images for icons.
import { HashRouter as Router, Routes, Route, useParams } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

// these are the pages of the admin dashboard that are used by the router. App is the index page.
import App from "./App";
import ClientWorkspace from "./ClientWorkspace";
import ClientInputForm from "./ClientInputForm";
import ProjectUpdates from "./ProjectUpdates";
import ProjectDocuments from "./ProjectDocuments";
import DocumentInputForm from "./DocumentInputForm";

// these are the stylesheet documents.
import "../shared/styles/variables.css";
import "../shared/styles/global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// this gets data from the data file for use in the rest of the site.
import GetData from "../shared/data.jsx";
let data = GetData

// this places the following router in the element called "root" which is the actual document that gets loaded by the browser.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* The router itself */}
    <Router>
      {/* The paths the router can access and what components they lead to rendering */}
      <Routes>
        {/* all of the following routes consist of what comes behind "admin/#" and what component they render */}
        <Route path="/" element={<App data={data} />} />
        <Route path="/clients" element={<ClientWorkspace data={data} />} />
        <Route path="/clients/add" element={<ClientInputForm data={data} />} />

        {/* ":clientId" and ":projectId" are route parameters that can be called upon inside the rendered element  */}
        <Route path="/clients/:clientId" element={<ClientWorkspace data={data} />} />
        <Route path="/clients/:clientId/edit" element={<ClientInputForm data={data} />} />
        <Route path="/projects/:projectId/Updates" element={<ProjectUpdates data={data} />} />
        <Route path="/projects/:projectId/Documents" element={<ProjectDocuments data={data} />} />
        <Route path="/projects/:projectId/Documents/add" element={<DocumentInputForm data={data} />} />
        <Route path="/projects/add/:clientId/:clientName/:companyName" element={<DocumentInputForm data={data} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
