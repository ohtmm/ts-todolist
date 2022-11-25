import { TTodo } from '../types/type';

type actionType = 'TODO_ADD' | 'TODO_UPDATE' | 'TODO_DELETE';

type Taction =
  | { type: 'TODO_ADD'; newTodo: TTodo }
  | { type: 'TODO_UPDATE'; updatedTodo: TTodo }
  | { type: 'TODO_DELETE'; todoId: string };

export const reducer = (state: TTodo[], action: Taction) => {
  switch (action.type) {
    case 'TODO_ADD':
      return [...state, action.newTodo];
    case 'TODO_UPDATE':
      return state.map((todo) =>
        todo.id === action.updatedTodo?.id ? action.updatedTodo : todo
      );
    case 'TODO_DELETE':
      return state.filter((todo) => todo.id !== action.todoId);
    default:
      return state;
  }
};
