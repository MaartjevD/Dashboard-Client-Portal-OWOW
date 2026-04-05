function ProgressBar({ percent }) {
  return (
    <div>
      <div className="d-flex justify-content-between mb-2">
        <span className="progress-label">Progress</span>
        <span className="progress-label">{percent}%</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;