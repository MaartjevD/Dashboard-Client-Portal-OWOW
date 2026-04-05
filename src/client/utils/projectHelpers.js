import mockProjects from "../../shared/data/mockProjects";

export function getProjectById(projectId) {
  return mockProjects.find((project) => project.id === projectId);
}

export function formatCurrency(value) {
  const numericValue = Number(value ?? 0);

  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(numericValue);
}

export function formatDate(dateString) {
  if (!dateString) return "—";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "—";
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function getStatusClass(status) {
  const normalized = status?.toLowerCase();

  if (normalized === "in progress") return "badge-progress";
  if (normalized === "planning") return "badge-planning";
  if (normalized === "completed") return "badge-completed";

  return "badge-default";
}

export function getValidProjectTab(tab) {
  const normalized = String(tab || "overview").toLowerCase();
  const allowedTabs = new Set(["overview", "budget", "documents", "update", "updates"]);

  if (!allowedTabs.has(normalized)) {
    return "overview";
  }

  return normalized === "updates" ? "update" : normalized;
}

export function getExpensePercentage(amount, total) {
  const safeTotal = Number(total ?? 0);
  const safeAmount = Number(amount ?? 0);

  if (!safeTotal) return 0;

  return Math.round((safeAmount / safeTotal) * 100);
}

export function getBudgetUsagePercentage(spent, total) {
  const safeTotal = Number(total ?? 0);
  const safeSpent = Number(spent ?? 0);

  if (!safeTotal) return 0;

  return Math.min(100, Math.round((safeSpent / safeTotal) * 100));
}

export function getHistoryWidth(item) {
  if (item?.width) return item.width;

  const spent = Number(item?.spent ?? 0);
  const total = Number(item?.total ?? 0);

  return `${getBudgetUsagePercentage(spent, total)}%`;
}

export function sortUpdatesByDate(updates = []) {
  return [...updates].sort((a, b) => new Date(b.date) - new Date(a.date));
}
