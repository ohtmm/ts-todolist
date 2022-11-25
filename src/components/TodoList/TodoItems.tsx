import { useState } from 'react';
import TodoItem from './TodoItem';
import { TTodo } from '../../types/type';
import { TodoListContainer } from '../styleComponents/styleComponents';

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
