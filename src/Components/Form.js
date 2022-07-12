const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 10000 },
    ]);
    setInputText("");
  };
  return (
    <form className='form'>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type='text'
        name='text'
        className='todo-input'
      />
      <button onClick={submitTodoHandler} className='todo-button' type='submit'>
        Add todo
      </button>
    </form>
  );
};

export default Form;
