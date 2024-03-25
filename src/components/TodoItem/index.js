// Write your code here
import React from 'react'

function TodoItem({todo, onDelete}) {
  return (
    <li className="item">
      <p>{todo.title}</p>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
