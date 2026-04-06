function SettingsButtonRow({ label }) {
  return (
    <button
      type="button"
      className="btn btn-light w-100 text-start d-flex justify-content-between align-items-center px-3 py-2"
    >
      <span>{label}</span>
      <span className="text-muted">›</span>
    </button>
  );
}

export default SettingsButtonRow;