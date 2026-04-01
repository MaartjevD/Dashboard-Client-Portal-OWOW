function LinksCard() {
  const links = [
    {
      id: 1,
      title: "Design Phase",
      subtitle: "You can see the design phase",
      link: "#",
    },
    {
      id: 2,
      title: "Project Plan",
      subtitle: "Project plan will update please recheck it",
      link: "#",
    },
    {
      id: 3,
      title: "Slack Group",
      subtitle: "We are always online on Slack",
      link: "#",
    },
    {
      id: 4,
      title: "Git",
      subtitle: "You can be updated with our github",
      link: "#",
    },
  ];

  return (
    <section className="mb-4">
      <h3 className="documents-links-title">Links</h3>

      <div className="custom-card links-card">
        <div className="row g-4">
          {links.map((item) => (
            <div className="col-12 col-md-6" key={item.id}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="project-link-box"
              >
                <div className="project-link-left">
                  <div className="project-link-icon">
                    <i className="bi bi-link-45deg"></i>
                  </div>

                  <div className="project-link-info">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>

                <div className="project-link-arrow">
                  <i className="bi bi-box-arrow-up-right"></i>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LinksCard;