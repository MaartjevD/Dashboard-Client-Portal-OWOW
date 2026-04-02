// import Sidebar from "../components/layout/Sidebar";
// import TopNavbar from "../components/layout/TopNavbar";
// import PageHeader from "../components/layout/PageHeader";
// import TabBar from "../components/layout/TabBar";
// import Footer from "../components/layout/Footer";
// import ChatButton from "../components/common/ChatButton";

// import RequirementsDocumentsCard from "../components/sections/RequirementsDocumentsCard";
// import LinksCard from "../components/sections/LinksCard";

// function ProjectDocumentsPage() {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar />

//       <div className="dashboard-main">
//         <TopNavbar />

//         <div className="dashboard-content">
//           <PageHeader
//             breadcrumb="Pages / Dashboard / Projects"
//             title="Project Alpha"
//             subtitle="Assigned to Micheal Jackson"
//             badge="In Progress"
//           />

//           <TabBar />

//           <RequirementsDocumentsCard />
//           <LinksCard />
//         </div>

//         <ChatButton />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ProjectDocumentsPage;









// import { useParams } from "react-router-dom";

// import Sidebar from "../components/layout/Sidebar";
// import TopNavbar from "../components/layout/TopNavbar";
// import PageHeader from "../components/layout/PageHeader";
// import TabBar from "../components/layout/TabBar";
// import Footer from "../components/layout/Footer";
// import ChatButton from "../components/common/ChatButton";

// import RequirementsDocumentsCard from "../components/sections/RequirementsDocumentsCard";
// import LinksCard from "../components/sections/LinksCard";

// function ProjectDocumentsPage() {
//   const { projectId } = useParams();

//   return (
//     <div className="dashboard-layout">
//       <Sidebar />

//       <div className="dashboard-main">
//         <TopNavbar />

//         <div className="dashboard-content">
//           <PageHeader
//             breadcrumb="Pages / Dashboard / Projects"
//             title={`Project ${projectId}`}
//             subtitle="Assigned to Micheal Jackson"
//             badge="In Progress"
//           />

//           <TabBar />

//           <RequirementsDocumentsCard />
//           <LinksCard />
//         </div>

//         <ChatButton />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ProjectDocumentsPage;








// import RequirementsDocumentsCard from "../components/sections/RequirementsDocumentsCard";
// import LinksCard from "../components/sections/LinksCard";

// function ProjectDocumentsPage() {
//   return (
//     <>
//       <RequirementsDocumentsCard />
//       <LinksCard />
//     </>
//   );
// }

// export default ProjectDocumentsPage;









import RequirementsDocumentsCard from "../components/sections/RequirementsDocumentsCard";
import LinksCard from "../components/sections/LinksCard";

function ProjectDocumentsPage() {
  return (
    <>
      <RequirementsDocumentsCard />
      <LinksCard />
    </>
  );
}

export default ProjectDocumentsPage;