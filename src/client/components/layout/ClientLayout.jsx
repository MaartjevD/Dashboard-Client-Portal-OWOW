import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

function ClientLayout({ children }) {
  return (
    <div className="client-layout">
      <Sidebar />

      <div className="client-main">
        <Topbar />

        <main className="client-content">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default ClientLayout;