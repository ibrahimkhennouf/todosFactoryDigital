export default function FilterElements(props: any) {
  const {
    filter,
    setFilterActive,
    setFilterAll,
    setFilterCompleted,
    filterTodos,
  } = props;

  const hndlFilterAll = () => {
    filterTodos("all");
    setFilterAll();
  };
  const hndlFilterCompleted = () => {
    filterTodos("completed");
    setFilterCompleted();
  };
  const hndlFilterActive = () => {
    filterTodos("active");
    setFilterActive();
  };
  return (
    <>
      <div className="text-center m-4">
        <button onClick={hndlFilterAll}>
          <span className={`${filter === "all" && "text-blue-600 underline"}`}>
            All
          </span>
        </button>
        <button className="ml-4" onClick={hndlFilterCompleted}>
          <span
            className={`${filter === "completed" && "text-blue-600 underline"}`}
          >
            Completed
          </span>
        </button>
        <button className="ml-4" onClick={hndlFilterActive}>
          <span
            className={`${filter === "active" && "text-blue-600 underline"}`}
          >
            Active
          </span>
        </button>
      </div>
    </>
  );
}
