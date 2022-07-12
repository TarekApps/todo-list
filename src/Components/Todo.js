const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((check) => check.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className='complete-btn'>
        {"\u2705"}
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        🗑
      </button>
    </div>
  );
};

export default Todo;