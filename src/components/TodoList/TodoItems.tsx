import { useState } from 'react';
import Todo from './TodoItem';
import TodoEdit from './TodoEdit';
import { TTodo } from './TodoList';
import TodoItem from './TodoItem';

interface ITodoItemsProps {
  todos: TTodo[];
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
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todoItem={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoItems;
