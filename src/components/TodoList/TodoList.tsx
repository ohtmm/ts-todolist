import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { v4 as uuidv4 } from 'uuid';

export type TTodo = {
  id: string;
  todo: string;
  isDone: boolean;
};

const TodoList = () => {
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

  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      <TodoItems
        todos={todos}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default TodoList;
