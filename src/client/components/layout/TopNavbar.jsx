// function TopNavbar() {
//   return (
//     <div className="top-navbar">
//       <div className="search-box">
//         <i className="bi bi-search"></i>
//         <input
//           type="text"
//           placeholder="Search projects, documents, updates..."
//         />
//       </div>

//       <div className="top-navbar-right">
//         <div className="lang-switch">
//           <button className="lang-btn active">EN</button>
//           <button className="lang-btn">NL</button>
//         </div>

//         <button className="icon-btn">
//           <i className="bi bi-bell"></i>
//           <span className="notif-dot"></span>
//         </button>

//         <div className="profile-box">
//           <img
//             src="https://i.pravatar.cc/40?img=47"
//             alt="profile"
//             className="profile-avatar"
//           />
//           <span className="profile-name">Jennifer Lopez</span>
//           <i className="bi bi-chevron-down"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopNavbar;
/* ===================== TOP NAVBAR ===================== */

function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="search-box">
        <i className="bi bi-search"></i>
        <input placeholder="Search projects, documents, updates..." />
      </div>

      <div className="top-navbar-right">
        <div className="lang-switch">
          <button className="lang-btn active">EN</button>
          <button className="lang-btn">NL</button>
        </div>

        <button className="icon-btn">
          <i className="bi bi-bell"></i>
          <span className="notif-dot"></span>
        </button>

        <div className="profile-box">
          <img
            src="https://i.pravatar.cc/40?img=47"
            alt="profile"
            className="profile-avatar"
          />
          <span className="profile-name">Jennifer Lopez</span>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;