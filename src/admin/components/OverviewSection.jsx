import TimelineCard from "./TimelineCard";
import ProjectDescriptionCard from "./ProjectDescriptionCard";
import ClientInfoCard from "./ClientInfoCard";

function OverviewSection({ projectData, setProjectData }) {
  return (
    <section className="overview-section">
      <TimelineCard
        projectData={projectData}
        setProjectData={setProjectData}
      />

      <div className="overview-section__bottom">
        <ProjectDescriptionCard
          projectData={projectData}
          setProjectData={setProjectData}
        />

        <ClientInfoCard
          projectData={projectData}
          setProjectData={setProjectData}
        />
      </div>
    </section>
  );
}

export default OverviewSection;