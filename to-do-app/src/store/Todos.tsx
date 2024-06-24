
"use client"
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, Context ,useContext} from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContextType = {
  todos: Todo[];
  handleAddToDo: (task: string) => void;
  toggleToDoCompleted: (id: string) => void;
  handleToDoDelete: (id: string) => void;
};

const defaultTodosContext: TodosContextType = {
  todos: [],
  handleAddToDo: () => {},
  toggleToDoCompleted: () => {},
  handleToDoDelete: () => {},
};

export const TodosContext: Context<TodosContextType> = createContext(defaultTodosContext);

export const TodosProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [todos, setToDo]: [Todo[], Dispatch<SetStateAction<Todo[]>>] = useState<Todo[]>([]);

  const handleAddToDo = (task: string): void => {
    setToDo((prev: Todo[]) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTodos;
    });
  };

  const toggleToDoCompleted = (id: string): void => {
    setToDo((prev: Todo[]) => {
      const newTodos: Todo[] = prev.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    });
  };

  const handleToDoDelete = (id: string): void => {
    setToDo((prev: Todo[]) => {
      const newTodos: Todo[] = prev.filter((todo: Todo) => todo.id !== id);
      return newTodos;
    });
  };

  return (
    <TodosContext.Provider value={{ todos, handleAddToDo,toggleToDoCompleted,handleToDoDelete }}>
      {children}
    </TodosContext.Provider>
  );
};


export function useTodos(): TodosContextType {
    const context = useContext(TodosContext);
    if (!context) {
      throw new Error("useTodos must be used within a TodosProvider");
    }
    return context;
  }