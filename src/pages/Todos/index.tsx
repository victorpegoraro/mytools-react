import './style.css';
import React, { useState, useEffect } from 'react';

function Todos() {

  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(event: React.FormEvent) {
    event.preventDefault();
    if (value.trim() !== "") {
      setTodos([...todos, value]);
      setValue("");
    }
  }

  const handleRemoveTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='back'>
      <h1 className='blue' >Tarefas</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          className='inputtext'
          placeholder='Digite sua nova tarefa'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className='btninput' >adicionar</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)} className='btnx' >X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;