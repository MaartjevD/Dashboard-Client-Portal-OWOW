import MilestonesCard from "../components/sections/MilestonesCard";
import RecentUpdatesGrid from "../components/sections/RecentUpdatesGrid";

function ProjectUpdatePage({ project }) {
  return (
    <>
      <MilestonesCard milestones={project.milestones} />
      <RecentUpdatesGrid updates={project.updates} />
    </>
  );
}

export default ProjectUpdatePage;