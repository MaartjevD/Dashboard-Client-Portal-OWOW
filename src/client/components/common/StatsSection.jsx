function StatsSection({ data }) {
  return (
    <div className="row g-4 mb-4">
      {data.map((item) => (
        <div className="col-12 col-sm-6 col-xl-3" key={item.id}>
          <div className="custom-card stat-card">
            <div className={`stat-icon ${item.color}`}>
              <i className={`bi ${item.icon}`}></i>
            </div>

            <div>
              <h6>{item.title}</h6>
              <h2>{item.value}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default StatsSection;