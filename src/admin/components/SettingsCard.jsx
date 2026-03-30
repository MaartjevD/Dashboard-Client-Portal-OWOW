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
      className={
        fullWidth ? "settings-card settings-card--full" : "settings-card"
      }
    >
      <div className="settings-card__header">
        <div className={`settings-card__icon ${iconClass}`}>{icon}</div>

        <div className="settings-card__title-group">
          <h2 className="settings-card__title">{title}</h2>
          {subtitle && <p className="settings-card__subtitle">{subtitle}</p>}
        </div>
      </div>

      <div className="settings-card__content">{children}</div>
    </section>
  );
}

export default SettingsCard;