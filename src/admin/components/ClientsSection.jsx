import ClientCard from "./ClientCard";

function ClientsSection() {
  return (
    <section className="clients-section">
      <div className="clients-header">
        <div className="clients-title">Clients</div>
        <button className="clients-button">Add Client</button>
      </div>

      <div className="clients-grid">
        <ClientCard
          name="Sarah Johnson"
          company="TechCorp Solutions"
          projects={3}
          status="Active"
          updated="2 hours ago"
          initials="SJ"
        />

        <ClientCard
          name="Michael Chen"
          company="Innovate Inc."
          projects={2}
          status="Active"
          updated="5 hours ago"
          initials="MC"
        />

        <ClientCard
          name="Emma Williams"
          company="Bright Future"
          projects={1}
          status="Planning"
          updated="1 day ago"
          initials="EW"
        />
      </div>
    </section>
  );
}

export default ClientsSection;