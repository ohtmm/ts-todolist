import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { v4 as uuidv4 } from 'uuid';

export type TTodo = {
  id: string;
  todo: string;
  isDone: boolean;
};

export type TFilter = 'All' | 'Left' | 'Done';

interface ITodoListProps {
  filter: string;
}

const TodoList = ({ filter }: ITodoListProps) => {
  const [todos, setTodos] = useState<TTodo[]>([
    {
      id: uuidv4(),
      todo: 'react',
      isDone: false,
    },
  ]);

  const handleAdd = (newTodo: TTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };
  const handleDelete = (todoId: string) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };
  const handleUpdate = (updatedTodo: TTodo) => {
    const newTodos = todos.map((todo) => {
      return todo.id === updatedTodo.id ? updatedTodo : todo;
    });
    setTodos(newTodos);
  };

  // const filterd = todos.filter((todo) => {
  //   if (filter === 'Done') {
  //     return todo.isDone === true;
  //   }
  // });

  const filterd = getFilteredTodos(todos, filter);
  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      <TodoItems
        todos={filterd}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

function getFilteredTodos(todos: TTodo[], filter: string) {
  if (filter === 'All') {
    return todos;
  }
  if (filter === 'Done') {
    return todos.filter((todo) => todo.isDone === true);
  }
  if (filter === 'Left') {
    return todos.filter((todo) => todo.isDone === false);
  }
}

export default TodoList;
