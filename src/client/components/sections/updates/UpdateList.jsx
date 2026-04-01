// /* ===================== UPDATE LIST ===================== */

// function UpdateList() {
//   return (
//     <section className="mb-4">
//       <h3 className="section-title">Recent Updates</h3>

//       <div className="custom-card">
//         <h4>Milestone Complete</h4>
//         <p>Project Alpha</p>
//         <small>2 hours ago</small>
//       </div>
//     </section>
//   );
// }

// export default UpdateList;
function UpdateList() {
  const updates = [
    {
      id: 1,
      title: "Milestone Complete",
      project: "Project Alpha",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Milestone Complete",
      project: "Project Beta",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      time: "2 hours ago",
    },
  ];

  return (
    <section className="mb-5">
      <h3 className="section-title">Recent Update</h3>

      <div className="row g-4">
        {updates.map((item) => (
          <div className="col-12 col-xl-6" key={item.id}>
            <div className="custom-card update-card">
              <div className="update-card-top">
                <h4 className="update-title">{item.title}</h4>
                <span className="update-project-tag">{item.project}</span>
              </div>

              <p className="update-description">{item.description}</p>
              <span className="update-time">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpdateList;