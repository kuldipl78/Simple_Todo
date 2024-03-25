import React, { useState } from 'react';
import './index.css'; // Import the CSS file
import TodoItem from '../TodoItem'; // Import the TodoItem component

const initialTodosList = [

  {

    id: 1,

    title: 'Book the ticket for today evening',

  },

  {

    id: 2,

    title: 'Rent the movie for tomorrow movie night',

  },

  {

    id: 3,

    title: 'Confirm the slot for the yoga session tomorrow morning',

  },

  {

    id: 4,

    title: 'Drop the parcel at Bloomingdale',

  },

  {

    id: 5,

    title: 'Order fruits on Big Basket',

  },

  {

    id: 6,

    title: 'Fix the production issue',

  },

  {

    id: 7,

    title: 'Confirm my slot for Saturday Night',

  },

  {

    id: 8,

    title: 'Get essentials for Sunday car wash',

  },

]

function SimpleTodos() {
  const [todos, setTodos] = useState(initialTodosList);

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="main-container">
      <div className="todo-container">
        <h1 className="main-heading">Simple Todos</h1>
        <ul className="items">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo} // Pass the delete function as a prop
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SimpleTodos;