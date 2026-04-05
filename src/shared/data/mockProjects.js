const mockProjects = [
  {
    id: "alpha",
    name: "Project Alpha",
    clientName: "OWOW",
    contactPerson: "Michael Jackson",
    status: "In Progress",
    progress: 68,
    budget: {
      total: 120000,
      spent: 74500,
      remaining: 45500,
    },
    deadline: "2026-06-30",
    documents: [
      {
        id: "alpha-doc-1",
        title: "Project Brief",
        type: "PDF",
        uploadedAt: "2026-03-15",
      },
      {
        id: "alpha-doc-2",
        title: "Design Assets",
        type: "ZIP",
        uploadedAt: "2026-03-20",
      },
    ],
    updates: [
      {
        id: "alpha-update-1",
        title: "Homepage UI approved",
        date: "2026-03-18",
        description: "The homepage design was approved by the client after the second revision.",
      },
      {
        id: "alpha-update-2",
        title: "Dashboard structure finalized",
        date: "2026-03-24",
        description: "Main dashboard sections and user flow were aligned with the project scope.",
      },
    ],
    milestones: [
      {
        id: "alpha-milestone-1",
        title: "Wireframes Completed",
        status: "Completed",
        dueDate: "2026-03-10",
      },
      {
        id: "alpha-milestone-2",
        title: "UI Design Approval",
        status: "Completed",
        dueDate: "2026-03-22",
      },
      {
        id: "alpha-milestone-3",
        title: "Frontend Development",
        status: "In Progress",
        dueDate: "2026-04-20",
      },
    ],
  },
  {
    id: "beta",
    name: "Project Beta",
    clientName: "NovaGrid",
    contactPerson: "Sarah Thompson",
    status: "Planning",
    progress: 24,
    budget: {
      total: 85000,
      spent: 18200,
      remaining: 66800,
    },
    deadline: "2026-08-15",
    documents: [
      {
        id: "beta-doc-1",
        title: "Initial Scope",
        type: "DOCX",
        uploadedAt: "2026-02-28",
      },
      {
        id: "beta-doc-2",
        title: "Requirements Notes",
        type: "PDF",
        uploadedAt: "2026-03-05",
      },
    ],
    updates: [
      {
        id: "beta-update-1",
        title: "Kickoff meeting completed",
        date: "2026-03-02",
        description: "Stakeholders reviewed the expected features, timeline, and design direction.",
      },
      {
        id: "beta-update-2",
        title: "Information architecture drafted",
        date: "2026-03-11",
        description: "Main content groups and user navigation paths were prepared for approval.",
      },
    ],
    milestones: [
      {
        id: "beta-milestone-1",
        title: "Discovery Workshop",
        status: "Completed",
        dueDate: "2026-03-01",
      },
      {
        id: "beta-milestone-2",
        title: "Content Mapping",
        status: "In Progress",
        dueDate: "2026-03-29",
      },
      {
        id: "beta-milestone-3",
        title: "Wireframe Delivery",
        status: "Pending",
        dueDate: "2026-04-12",
      },
    ],
  },
  {
    id: "gamma",
    name: "Project Gamma",
    clientName: "PixelForge",
    contactPerson: "Daniel Carter",
    status: "Completed",
    progress: 100,
    budget: {
      total: 150000,
      spent: 149200,
      remaining: 800,
    },
    deadline: "2026-02-10",
    documents: [
      {
        id: "gamma-doc-1",
        title: "Final Report",
        type: "PDF",
        uploadedAt: "2026-02-08",
      },
      {
        id: "gamma-doc-2",
        title: "Deployment Checklist",
        type: "XLSX",
        uploadedAt: "2026-02-09",
      },
    ],
    updates: [
      {
        id: "gamma-update-1",
        title: "Client sign-off received",
        date: "2026-02-06",
        description: "The client approved the final interface and production-ready handoff package.",
      },
      {
        id: "gamma-update-2",
        title: "Production deployment completed",
        date: "2026-02-09",
        description: "The final version was deployed successfully and post-launch checks were completed.",
      },
    ],
    milestones: [
      {
        id: "gamma-milestone-1",
        title: "Design System Ready",
        status: "Completed",
        dueDate: "2025-12-18",
      },
      {
        id: "gamma-milestone-2",
        title: "Development Phase",
        status: "Completed",
        dueDate: "2026-01-24",
      },
      {
        id: "gamma-milestone-3",
        title: "Launch",
        status: "Completed",
        dueDate: "2026-02-09",
      },
    ],
  },
];

export default mockProjects;