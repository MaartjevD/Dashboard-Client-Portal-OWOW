export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="client-footer border-top mt-auto">
      <div className="container-fluid px-3 px-lg-4 py-3">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
          <p className="client-footer-text mb-0">
            © {currentYear} OWOW Client Portal. All rights reserved.
          </p>

          <div className="d-flex align-items-center gap-3">
            <a href="#" className="client-footer-link">
              Privacy Policy
            </a>
            <a href="#" className="client-footer-link">
              Terms
            </a>
            <a href="#" className="client-footer-link">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}