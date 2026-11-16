function SummaryCard({ label, value, variant }) {
  return (
    <div className={`summary-card summary-card--${variant}`}>
      <span className="summary-card__value">{value}</span>
      <span className="summary-card__label">{label}</span>
    </div>
  );
}

function DashboardSummary({ total, pending, completed }) {
  return (
    <section className="summary" aria-label="Task summary">
      <SummaryCard label="Total Tasks" value={total} variant="total" />
      <SummaryCard label="Pending Tasks" value={pending} variant="pending" />
      <SummaryCard label="Completed Tasks" value={completed} variant="completed" />
    </section>
  );
}

export default DashboardSummary;
