import TimelineCard from "./TimelineCard";
import ProjectDescriptionCard from "./ProjectDescriptionCard";
import ClientInfoCard from "./ClientInfoCard";

function OverviewSection({ projectData, setProjectData }) {
  return (
    <section className="container-fluid px-0">

      {/* Top - Timeline */}
      <div className="mb-4">
        <TimelineCard
          projectData={projectData}
          setProjectData={setProjectData}
        />
      </div>

      {/* Bottom Section */}
      <div className="row g-4">
        
        <div className="col-12 col-lg-6">
          <ProjectDescriptionCard
            projectData={projectData}
            setProjectData={setProjectData}
          />
        </div>

        <div className="col-12 col-lg-6">
          <ClientInfoCard
            projectData={projectData}
            setProjectData={setProjectData}
          />
        </div>

      </div>
    </section>
  );
}

export default OverviewSection;