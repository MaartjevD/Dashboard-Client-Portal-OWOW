function RequirementsDocumentsCard({ documents }) {
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
                    <span className="requirement-meta-item">
                      <i className="bi bi-file-earmark"></i>
                      {doc.type}
                    </span>

                    <span className="requirement-dot">·</span>
                    <span>{doc.size}</span>
                    <span className="requirement-dot">·</span>

                    <span className="requirement-meta-item">
                      <i className="bi bi-calendar4-event"></i>
                      {doc.uploadedAt}
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
                href={doc.url}
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