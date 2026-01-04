import { Button } from "../ui/button";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onToggle(e.target.checked)}
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={onEdit}>Edit</Button>
        <Button variant="destructive" onClick={onDelete}>Delete</Button>
      </div>
    </div>
  );
}
