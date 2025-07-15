import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos }) =>
  todos.map(todo => (
    <TodoInfo
      todo={{
        id: todo.id,
        userId: todo.userId,
        completed: todo.completed,
        title: todo.title,
        user: { ...todo.user },
      }}
    />
  ));
