

"use client";


import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useTodos } from '@/store/Todos';


const ToDoList = () => {
  const { todos ,toggleToDoCompleted,handleToDoDelete} = useTodos(); // Destructure the `todos` array correctly
  console.log(todos);

  return (
    <div className="py-5 flex justify-center">
      <div className="w-3/12 bg-teal-50">
        {todos.length === 0 ? (
          <p className="text-center text-gray-600 py-4">No task Pending!</p>
        ) : (
          <ol className="list-decimal list-inside pl-5"> {/* Added pl-5 for padding left */}
            {todos.map((todo) => (
              <li className="py-4 flex justify-center items-center" key={todo.id}>
                <input 
                  type='checkbox' 
                  id={`todo-${todo.id}`}  
                  checked={todo.completed} 
                  onChange={() => toggleToDoCompleted(todo.id)}
                 
                />
                <span className='px-3'>{todo.task}</span>
                {todo.completed && (
                  <button
                    className="flex-shrink-0 mx-8 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                    onClick={() => handleToDoDelete(todo.id)}
                  >
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default ToDoList;

