import React from "react";
import useBudgetList from "../../hooks/useBudgetList";

const Budget = () => {
  const { budget: budgetlines } = useBudgetList();

  return (
    <ul style={{ textAlign: "left" }}>
      {budgetlines.map(budgetline =>
        <li key={budgetline.id}>
          {budgetline.title}
        </li>)}
    </ul>
  )
}

export default Budget;