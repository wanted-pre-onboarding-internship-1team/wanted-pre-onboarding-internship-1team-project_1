import TodoHeader from '../../components/todo/TodoHeader';
import TodoList from '../../components/todo/TodoList';

export default function todoPage() {
  return (
    <>
      <TodoHeader
      // filters={FILTERS}
      // currentFilter={currentFilter}
      // onFilterChange={setCurrentFilter}
      />
      <TodoList
      //   currentFilter={currentFilter}
      />
    </>
  );
}
