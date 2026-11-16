import TaskCard from "./TaskCard.jsx";

const EMPTY_MESSAGES = {
  All: "No tasks yet. Add your first task using the form.",
  Pending: "Nothing pending. You're all caught up!",
  Completed: "No completed tasks yet. Finish a task to see it here.",
};

function TaskList({ tasks, filter, onToggleStatus, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state card">
        <p className="empty-state__icon" aria-hidden="true">📝</p>
        <p>{EMPTY_MESSAGES[filter]}</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
