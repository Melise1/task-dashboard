# Task Management Dashboard

A small, responsive task manager built with React and Vite. Add tasks, mark them
Completed or Pending, filter the list, and watch the summary counts update.

## Features

- Dashboard summary: Total, Pending and Completed counts (update automatically)
- Add a task with title (required), description (optional) and priority
- Form validation: empty or whitespace-only titles are rejected; the form clears after submit
- Task cards showing title, description, priority and status
- Mark tasks Completed or back to Pending, and delete tasks
- All / Pending / Completed filters with friendly empty-state messages
- Responsive layout for desktop and mobile

## Setup

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
task-dashboard/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  # App entry point
    ├── App.jsx                   # Holds task state and handlers
    ├── index.css                 # Responsive styles
    └── components/
        ├── DashboardSummary.jsx  # Total / Pending / Completed cards
        ├── TaskForm.jsx          # Add-task form with validation
        ├── FilterBar.jsx         # All / Pending / Completed buttons
        ├── TaskList.jsx          # List and empty state
        └── TaskCard.jsx          # One task with its actions
```

## Task Data Structure

```js
{
  id: "unique-uuid",
  title: "Prepare weekly report",
  description: "Optional details",
  priority: "Low" | "Medium" | "High",
  status: "Pending" | "Completed"
}
```

Each task gets a unique id from `crypto.randomUUID()`, never an array index.

## Screenshots

1. Dashboard with tasks: `screenshots/01-dashboard.png`
2. Dashboard filtered by status: `screenshots/02-filtered-completed.png`
3. Mobile layout (extra): `screenshots/03-mobile.png`
