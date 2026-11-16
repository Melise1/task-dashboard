const FILTERS = ["All", "Pending", "Completed"];

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter tasks">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          className={`filter-btn ${activeFilter === filter ? "filter-btn--active" : ""}`}
          aria-pressed={activeFilter === filter}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
