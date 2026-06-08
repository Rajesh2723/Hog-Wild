function Controls({
  showGreasedOnly,
  setShowGreasedOnly,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="ui segment">

      <label htmlFor="greasedFilter">
        Show Greased Only
      </label>

      <input
        id="greasedFilter"
        type="checkbox"
        checked={showGreasedOnly}
        onChange={(e) =>
          setShowGreasedOnly(e.target.checked)
        }
      />

      <br />
      <br />

      <label htmlFor="sortBy">
        Sort By
      </label>

      <select
        id="sortBy"
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
      >
        <option value="">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Controls;