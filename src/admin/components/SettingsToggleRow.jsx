function SettingsToggleRow({ title, subtitle, checked = false }) {
  return (
    <div className="settings-toggle-row">
      <div className="settings-toggle-row__text">
        <h3 className="settings-toggle-row__title">{title}</h3>
        <p className="settings-toggle-row__subtitle">{subtitle}</p>
      </div>

      <label className="settings-switch">
        <input type="checkbox" defaultChecked={checked} />
        <span className="settings-switch__slider"></span>
      </label>
    </div>
  );
}

export default SettingsToggleRow;