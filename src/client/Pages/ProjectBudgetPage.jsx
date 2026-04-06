import BudgetStatsRow from "../components/sections/BudgetStatsRow";
import BudgetProgressCard from "../components/sections/BudgetProgressCard";
import MonthlyExpensesCard from "../components/sections/MonthlyExpensesCard";
import BudgetHistoryCard from "../components/sections/BudgetHistoryCard";

function ProjectBudgetPage({ project }) {
  return (
    <>
      <BudgetStatsRow budget={project.budget} />
      <BudgetProgressCard budget={project.budget} />
      <MonthlyExpensesCard budget={project.budget} />
      <BudgetHistoryCard budget={project.budget} />
    </>
  );
}

export default ProjectBudgetPage;