
"use client"
import { TodosContext, TodosContextType } from "@/store/Todos";
import React, { ChangeEvent, useState, FormEvent, Dispatch, SetStateAction, useContext } from "react";

const Todocomp = () => {
  const [todo, setToDo]: [string, Dispatch<SetStateAction<string>>] =
    useState<string>("");
  const [showEmptyAlert, setShowEmptyAlert] = useState<boolean>(false);

  const { handleAddToDo } = useContext<TodosContextType>(TodosContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmedTodo = todo.trim();
    if (trimmedTodo !== "") {
      handleAddToDo(trimmedTodo);
      setToDo("");
    } else {
      // If trimmedTodo is empty, show alert
      setShowEmptyAlert(true);
      // Hide the alert after 3 seconds
      setTimeout(() => {
        setShowEmptyAlert(false);
      }, 1000);
    }
  }

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border border-teal-500 py-2 px-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add to List"
            aria-label="Full name"
            value={todo}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setToDo(event.target.value)
            }
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      {showEmptyAlert && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-red-500">Please add a task!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todocomp;
