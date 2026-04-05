export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="client-footer">
      <div className="container-fluid px-3 px-lg-4 py-3">
        <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3">
          <div className="d-flex flex-wrap align-items-center gap-4">
            <a href="#" className="client-footer-link">Terms and Conditions</a>
            <a href="#" className="client-footer-link">Cookies</a>
            <a href="#" className="client-footer-link">Contact Us</a>
          </div>

          <p className="client-footer-text mb-0">© {currentYear}, All rights reserved by OWOW</p>
        </div>
      </div>
    </footer>
  );
}