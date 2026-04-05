export default function DashboardPage() {
  return (
    <div className="row g-4">
      <div className="col-12 col-xl-3 col-md-6">
        <div className="card border-0 shadow-sm bg-dark text-white h-100">
          <div className="card-body">
            <div className="small text-secondary mb-2">Total Projects</div>
            <div className="display-6 fw-bold">12</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-3 col-md-6">
        <div className="card border-0 shadow-sm bg-dark text-white h-100">
          <div className="card-body">
            <div className="small text-secondary mb-2">In Progress</div>
            <div className="display-6 fw-bold">03</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-3 col-md-6">
        <div className="card border-0 shadow-sm bg-dark text-white h-100">
          <div className="card-body">
            <div className="small text-secondary mb-2">Planning</div>
            <div className="display-6 fw-bold">02</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-3 col-md-6">
        <div className="card border-0 shadow-sm bg-dark text-white h-100">
          <div className="card-body">
            <div className="small text-secondary mb-2">Completed</div>
            <div className="display-6 fw-bold">07</div>
          </div>
        </div>
      </div>
    </div>
  );
}