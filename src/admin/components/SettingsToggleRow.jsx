function SettingsToggleRow({ title, subtitle, checked = false }) {
  return (
    <div className="d-flex justify-content-between align-items-center py-2">

      {/* Text */}
      <div>
        <h6 className="mb-1 fw-semibold">{title}</h6>
        <p className="text-muted small mb-0">{subtitle}</p>
      </div>

      {/* Switch */}
      <div className="form-check form-switch m-0">
        <input
          className="form-check-input"
          type="checkbox"
          defaultChecked={checked}
        />
      </div>

    </div>
  );
}

export default SettingsToggleRow;