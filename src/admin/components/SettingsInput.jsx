function SettingsInput({ label, value, placeholder = "" }) {
  return (
    <div className="settings-input">
      <label className="settings-input__label">{label}</label>
      <input
        className="settings-input__field"
        type="text"
        defaultValue={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SettingsInput;