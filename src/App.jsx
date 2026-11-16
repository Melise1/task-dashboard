import { useState } from "react";
import DashboardSummary from "./components/DashboardSummary.jsx";
import TaskForm from "./components/TaskForm.jsx";
import FilterBar from "./components/FilterBar.jsx";
import TaskList from "./components/TaskList.jsx";

// Initial sample data so the dashboard is not empty on first load
const INITIAL_TASKS = [
  {
    id: crypto.randomUUID(),
    title: "Prepare weekly report",
    description: "Summarize progress and blockers for the team meeting.",
    priority: "High",
    status: "Pending",
  },
  {
    id: crypto.randomUUID(),
    title: "Reply to client emails",
    description: "",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: crypto.randomUUID(),
    title: "Book dentist appointment",
    description: "Check availability for next week.",
    priority: "Low",
    status: "Completed",
  },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filter, setFilter] = useState("All");

  // Add: new tasks always start as Pending and get a unique id
  const addTask = ({ title, description, priority }) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      status: "Pending",
    };
    setTasks((current) => [newTask, ...current]);
  };

  // Update: toggle between Pending and Completed
  const toggleTaskStatus = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
          : task
      )
    );
  };

  // Remove
  const deleteTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  // Summary values are derived from state, so they always stay in sync
  const totalCount = tasks.length;
  const pendingCount = tasks.filter((task) => task.status === "Pending").length;
  const completedCount = totalCount - pendingCount;

  // Filtering
  const visibleTasks = tasks.filter(
    (task) => filter === "All" || task.status === filter
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Management Dashboard</h1>
        <p>Organize your day and track your progress.</p>
      </header>

      <DashboardSummary
        total={totalCount}
        pending={pendingCount}
        completed={completedCount}
      />

      <main className="layout">
        <aside className="layout__form">
          <TaskForm onAddTask={addTask} />
        </aside>

        <section className="layout__tasks">
          <div className="tasks-header">
            <h2 className="section-title">Your Tasks</h2>
            <FilterBar activeFilter={filter} onFilterChange={setFilter} />
          </div>

          <TaskList
            tasks={visibleTasks}
            filter={filter}
            onToggleStatus={toggleTaskStatus}
            onDeleteTask={deleteTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
