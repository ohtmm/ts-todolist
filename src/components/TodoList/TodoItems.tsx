import { useState } from 'react';
import TodoItem from './TodoItem';
import { TTodo } from '../../types/type';
import styled from 'styled-components';

interface ITodoItemsProps {
  todos: TTodo[] | undefined;
  onDelete: (id: string) => void;
  onUpdate: (todo: TTodo) => void;
}

const TodoItems = ({ todos, onDelete, onUpdate }: ITodoItemsProps) => {
  const [selectedTodo, setSelectedTodo] = useState<TTodo>({
    id: '',
    todo: '',
    isDone: false,
  });

  return (
    <TodoListContainer>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoItems;

const TodoListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-content: flex-start;
  width: 80%;
  height: 70%;
  margin: 4rem auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
