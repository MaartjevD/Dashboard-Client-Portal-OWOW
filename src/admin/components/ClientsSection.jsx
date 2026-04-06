import ClientCard from "./ClientCard";

function ClientsSection() {
  return (
    <section className="container-fluid px-0">
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h5 fw-semibold mb-0">Clients</h2>

        <button className="btn btn-primary btn-sm">
          Add Client
        </button>
      </div>

      {/* Grid */}
      <div className="row g-4">
        <div className="col-12 col-md-6 col-xl-4">
          <ClientCard
            name="Sarah Johnson"
            company="TechCorp Solutions"
            projects={3}
            status="Active"
            updated="2 hours ago"
            initials="SJ"
          />
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <ClientCard
            name="Michael Chen"
            company="Innovate Inc."
            projects={2}
            status="Active"
            updated="5 hours ago"
            initials="MC"
          />
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <ClientCard
            name="Emma Williams"
            company="Bright Future"
            projects={1}
            status="Planning"
            updated="1 day ago"
            initials="EW"
          />
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;