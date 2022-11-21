import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { v4 as uuidv4 } from 'uuid';
import { TTodo } from '../../types/type';
import getFilteredTodos from '../../utils/getFilteredTodos';
import styled from 'styled-components';

interface ITodoListProps {
  filter: string;
}

const TodoList = ({ filter }: ITodoListProps) => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  useEffect(() => {
    todos.forEach((item) => {
      localStorage.setItem(item.id, JSON.stringify(item));
    });
  }, []);

  const handleAdd = (newTodo: TTodo) => {
    setTodos((prev) => [...prev, newTodo]);
    localStorage.setItem(newTodo.id, JSON.stringify(newTodo));
  };
  const handleDelete = (todoId: string) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
    localStorage.removeItem(todoId);
  };
  const handleUpdate = (updatedTodo: TTodo) => {
    const newTodos = todos.map((todo) => {
      return todo.id === updatedTodo.id ? updatedTodo : todo;
    });
    setTodos(newTodos);
    localStorage.setItem(updatedTodo.id, JSON.stringify(updatedTodo));
  };

  // const filterd = todos.filter((todo) => {
  //   if (filter === 'Done') {
  //     return todo.isDone === true;
  //   }
  // });

  const filterd = getFilteredTodos(todos, filter);
  return (
    <TodoContainer>
      <TodoInput onAdd={handleAdd} />
      <TodoItems
        todos={filterd}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </TodoContainer>
  );
};

export default TodoList;

const TodoContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  width: 100%;
  height: 40rem;
`;
