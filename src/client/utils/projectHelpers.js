import mockProjects from "../../shared/data/mockProjects";

export function getProjectById(projectId) {
  return mockProjects.find((project) => project.id === projectId);
}

export function formatCurrency(value) {
  return `€${Number(value).toLocaleString("en-US")}`;
}

export function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB");
}

export function getStatusClass(status) {
  const normalized = status?.toLowerCase();

  if (normalized === "in progress") return "badge-progress";
  if (normalized === "planning") return "badge-planning";
  if (normalized === "completed") return "badge-completed";

  return "badge-progress";
}