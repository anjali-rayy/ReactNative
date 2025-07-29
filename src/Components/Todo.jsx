import { useEffect, useRef, useState } from 'react';
import './CSS/Todo.css';
import TodoItems from './TodoItems';

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    const inputValue = inputRef.current.value.trim();

    if (inputValue === "") {
      alert("Please enter a task before adding.");
      return;
    }

    const newTodos = [...todos, { no: count++, text: inputValue, display: "" }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    localStorage.setItem("todos_count", count.toString());
    inputRef.current.value = "";
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
    count = Number(localStorage.getItem("todos_count")) || 0;
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='todo'> 
      <div className="todo-header">To-Do List</div>
      <div className='todo-add'>
        <input ref={inputRef} type="text" placeholder='Add Your Task' className='todo-input' />
        <div onClick={add} className="todo-add-btn">Add</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => (
          <TodoItems
            key={index}
            no={item.no}
            display={item.display}
            text={item.text}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
