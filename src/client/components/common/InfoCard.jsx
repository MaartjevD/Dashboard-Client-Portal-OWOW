function InfoCard({ title, children }) {
  return (
    <div className="custom-card info-card">
      <h3 className="info-title">{title}</h3>
      {children}
    </div>
  );
}

export default InfoCard;