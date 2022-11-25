import { useEffect, useReducer, useState } from 'react';
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';
import { TTodo } from '../../types/type';
import getFilteredTodos from '../../utils/getFilteredTodos';
import { TodoContainer } from '../styleComponents/styleComponents';
import { reducer } from '../../utils/todosReducer';

interface ITodoListProps {
  filter: string;
}

const initialTodos: TTodo[] = [];

function TodoList({ filter }: ITodoListProps) {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  useEffect(() => {
    todos.forEach((item) => {
      localStorage.setItem(item.id, JSON.stringify(item));
    });
  }, []);

  const handleAdd = (newTodo: TTodo) => {
    dispatch({ type: 'TODO_ADD', newTodo });
    localStorage.setItem(newTodo.id, JSON.stringify(newTodo));
  };
  const handleDelete = (todoId: string) => {
    dispatch({ type: 'TODO_DELETE', todoId });
    localStorage.removeItem(todoId);
  };
  const handleUpdate = (updatedTodo: TTodo) => {
    dispatch({ type: 'TODO_UPDATE', updatedTodo });
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
}

export default TodoList;
