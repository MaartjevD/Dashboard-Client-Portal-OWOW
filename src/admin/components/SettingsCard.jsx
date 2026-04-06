function SettingsCard({
  icon,
  title,
  subtitle,
  children,
  iconClass = "",
  fullWidth = false,
}) {
  return (
    <section
      className={`card border-0 shadow-sm ${
        fullWidth ? "w-100" : "h-100"
      }`}
    >
      <div className="card-body p-4">
        
        {/* Header */}
        <div className="d-flex align-items-start gap-3 mb-4">
          
          <div
            className={`d-flex align-items-center justify-content-center rounded-3 bg-light ${iconClass}`}
            style={{ width: "48px", height: "48px", minWidth: "48px" }}
          >
            {icon}
          </div>

          <div>
            <h2 className="h6 fw-semibold mb-1">{title}</h2>
            {subtitle && (
              <p className="text-muted small mb-0">{subtitle}</p>
            )}
          </div>

        </div>

        {/* Content */}
        <div>
          {children}
        </div>

      </div>
    </section>
  );
}

export default SettingsCard;