const employees = [{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

]


function processEmployees() {
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  const mapped = filtered.map(emp => {
    if (emp.rating > 4.5) {
      return { name: emp.name, performance: "Excellent" };
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      return { name: emp.name, performance: "Good" };
    } else {
      return { name: emp.name, performance: "Needs Improvement" };
    }
  });

  const sorted = mapped.sort((a, b) => {
    const order = ["Excellent", "Good", "Needs Improvement"];
    return order.indexOf(a.performance) - order.indexOf(b.performance);
  });

  return sorted;
}
console.log(processEmployees())