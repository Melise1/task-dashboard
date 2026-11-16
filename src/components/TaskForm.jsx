import { useState } from "react";

const PRIORITIES = ["Low", "Medium", "High"];

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reject empty or whitespace-only titles
    if (title.trim() === "") {
      setError("Please enter a task title.");
      return;
    }

    onAddTask({
      title: title.trim(),
      description: description.trim(),
      priority,
    });

    // Clear the form after a successful submission
    setTitle("");
    setDescription("");
    setPriority("Medium");
    setError("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    if (error) setError("");
  };

  return (
    <form className="task-form card" onSubmit={handleSubmit} noValidate>
      <h2 className="section-title">Add a Task</h2>

      <div className="field">
        <label htmlFor="task-title">
          Task Title <span className="required">*</span>
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="e.g. Finish project report"
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? "title-error" : undefined}
        />
        {error && (
          <p id="title-error" className="field-error" role="alert">
            {error}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="task-description">Description (optional)</label>
        <textarea
          id="task-description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a few details..."
        />
      </div>

      <div className="field">
        <label htmlFor="task-priority">Priority</label>
        <select
          id="task-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          {PRIORITIES.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn--primary btn--full">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
