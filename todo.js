function Todo({ todo, index, remove }) {
  function handle() {
    console.log("Ping:", index);
    remove(index);
  }
  return (
    <div className="todo">
      {todo.text}{" "}
      <button
        type="button"
        class="btn btn-outline-danger btn-xs"
        onClick={handle}
      >
        Remove Task
      </button>
    </div>
  );
}
