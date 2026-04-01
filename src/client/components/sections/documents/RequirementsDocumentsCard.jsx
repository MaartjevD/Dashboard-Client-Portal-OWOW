function RequirementsDocumentsCard() {
  const documents = [
    {
      id: 1,
      title: "Requirements Document",
      meta: "Jan 25, 2026",
      author: "Michael Jackson",
      type: "",
      size: "",
      link: "#",
    },
    {
      id: 2,
      title: "Requirements Document",
      meta: "Jan 25, 2026",
      author: "Michael Jackson",
      type: "",
      size: "",
      link: "#",
    },
    {
      id: 3,
      title: "Requirements Document",
      meta: "Jan 25, 2026",
      author: "Michael Jackson",
      type: "",
      size: "",
      link: "#",
    },
    {
      id: 4,
      title: "Requirements Document",
      meta: "Jan 25, 2026",
      author: "Michael Jackson",
      type: "",
      size: "",
      link: "#",
    },
    {
      id: 5,
      title: "Requirements Document",
      meta: "Jan 25, 2026",
      author: "Michael Chen",
      type: "",
      size: "",
      link: "#",
    },
    {
      id: 6,
      title: "Requirements Document",
      meta: "Jan 25, 2026",
      author: "Michael Jackson",
      type: "",
      size: "",
      link: "#",
    },
    {
      id: 7,
      title: "Requirements Document",
      meta: "Jan 25, 2026",
      author: "Michael Jackson",
      type: "",
      size: "",
      link: "#",
    },
    {
      id: 8,
      title: "Requirements Document",
      meta: "Jan 25, 2026",
      author: "Michael Jackson",
      type: "",
      size: "",
      link: "#",
    },
  ];

  return (
    <section className="mb-3">
      <div className="custom-card requirements-card">
        <div className="requirements-list">
          {documents.map((doc) => (
            <div key={doc.id} className="requirement-row">
              <div className="requirement-left">
                <div className="requirement-icon">
                  <i className="bi bi-file-earmark-text"></i>
                </div>

                <div className="requirement-info">
                  <h4 className="requirement-title">{doc.title}</h4>

                  <div className="requirement-meta">
                    {doc.type && (
                      <>
                        <span className="requirement-meta-item">
                          <i className="bi bi-file-earmark"></i>
                          {doc.type}
                        </span>
                        <span className="requirement-dot">·</span>
                        <span>{doc.size}</span>
                        <span className="requirement-dot">·</span>
                      </>
                    )}

                    <span className="requirement-meta-item">
                      <i className="bi bi-calendar4-event"></i>
                      {doc.meta}
                    </span>

                    <span className="requirement-dot">·</span>

                    <span className="requirement-meta-item">
                      <i className="bi bi-person"></i>
                      {doc.author}
                    </span>
                  </div>
                </div>
              </div>

              <a
                href={doc.link}
                className="requirement-open-btn"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-box-arrow-up-right"></i>
                <span>Open</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RequirementsDocumentsCard;