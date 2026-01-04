export default function Sidebar({ todos, selectedId, onSelect }) {
  return (
    <aside className="w-64 border-r h-full overflow-y-auto">
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <button
              onClick={() => onSelect(t.id)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                selectedId === t.id ? "bg-gray-200" : ""
              }`}
            >
              {t.title} {t.completed ? "✅" : ""}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
