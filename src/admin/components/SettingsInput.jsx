function SettingsInput({ label, value, placeholder = "" }) {
  return (
    <div className="mb-3">
      <label className="form-label small fw-semibold">
        {label}
      </label>

      <input
        type="text"
        className="form-control"
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SettingsInput;