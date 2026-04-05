import "../../shared/styles/themeMaartje.css";

function Header() {
  // component for the header of the dashboard
  return (
    //Wat er op het scherm komt te staan
    <header className="header">
      <input
        className="search"
        placeholder="Search projects, documents, updates..."
      />

      <div className="header-right">
        <div className="lang">
          <button className="active">EN</button>
          <button>NL</button>
        </div>

        <span className="icon">🔔</span>

        <div className="user">
          <div>
            <p>Sarah Sanders</p>
            <span>Project manager</span>
          </div>
          <div className="avatar">SS</div>
        </div>
      </div>
    </header>
  );
}

export default Header; //zodat je hem ergens anders kunt gebruiken
