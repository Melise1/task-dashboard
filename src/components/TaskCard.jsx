function TaskCard({ task, onToggleStatus, onDeleteTask }) {
  const isCompleted = task.status === "Completed";

  return (
    <li className={`task-card card ${isCompleted ? "task-card--completed" : ""}`}>
      <div className="task-card__body">
        <h3 className="task-card__title">{task.title}</h3>

        {task.description && (
          <p className="task-card__description">{task.description}</p>
        )}

        <div className="task-card__meta">
          <span className={`badge badge--priority-${task.priority.toLowerCase()}`}>
            {task.priority} priority
          </span>
          <span className={`badge badge--status-${task.status.toLowerCase()}`}>
            {task.status}
          </span>
        </div>
      </div>

      <div className="task-card__actions">
        <button
          type="button"
          className="btn btn--secondary"
          onClick={() => onToggleStatus(task.id)}
        >
          {isCompleted ? "Mark as Pending" : "Mark as Completed"}
        </button>
        <button
          type="button"
          className="btn btn--danger"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskCard;
