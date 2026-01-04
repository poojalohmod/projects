import TodoItem from "./TodoItem";

export default function TodoDetails({ todo, onToggle, onDelete, onEdit }) {
  if (!todo) return <div className="p-6 text-gray-600">Select a todo from the sidebar.</div>;
  return (
    <div className="p-6">
      <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}
