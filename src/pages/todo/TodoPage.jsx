import { FilterProvider } from '../../components/todo/FilterContext';
import { TodoProvider } from '../../components/todo/TodoContext';
import TodoHeader from '../../components/todo/TodoHeader';
import TodoList from '../../components/todo/TodoList';

export default function todoPage() {
  return (
    <TodoProvider>
      <FilterProvider>
        <TodoHeader />
        <TodoList />
      </FilterProvider>
    </TodoProvider>
  );
}
