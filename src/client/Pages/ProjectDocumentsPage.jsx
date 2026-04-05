import RequirementsDocumentsCard from "../components/sections/RequirementsDocumentsCard";
import LinksCard from "../components/sections/LinksCard";

function ProjectDocumentsPage({ project }) {
  return (
    <>
      <RequirementsDocumentsCard documents={project.documents} />
      <LinksCard links={project.links} />
    </>
  );
}

export default ProjectDocumentsPage;