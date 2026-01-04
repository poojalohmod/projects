import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import TodoDetails from "../components/todos/TodoDetails";
import UpdateTodoDialog from "../components/todos/UpdateTodoDialog";
import { TodoService } from "../services/todo.service";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [newTitle, setNewTitle] = useState("");

  const [editOpen, setEditOpen] = useState(false);
  const selectedTodo = useMemo(() => todos.find((t) => t.id === selectedId), [todos, selectedId]);

  const filtered = useMemo(() => {
    if (filter === "completed") return todos.filter((t) => t.completed);
    if (filter === "pending") return todos.filter((t) => !t.completed);
    return todos;
  }, [todos, filter]);

  useEffect(() => {
    (async () => {
      const list = await TodoService.listTodos();
      setTodos(list);
      if (list.length) setSelectedId(list[0].id);
    })();
  }, []);

  const addTodo = async () => {
    if (!newTitle.trim()) return;
    const t = await TodoService.createTodo(newTitle.trim());
    setTodos((prev) => [t, ...prev]);
    setNewTitle("");
    setSelectedId(t.id);
  };

  const deleteTodo = async (id) => {
    await TodoService.delete(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const toggleTodo = async (id, completed) => {
    await TodoService.toggleStatus(id, completed);
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed } : t)));
  };

  const openEdit = () => setEditOpen(true);
  const saveEdit = async (title) => {
    if (!selectedTodo) return;
    await TodoService.updateTitle(selectedTodo.id, title);
    setTodos((prev) => prev.map((t) => (t.id === selectedTodo.id ? { ...t, title } : t)));
    setEditOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar filter={filter} setFilter={setFilter} />
      <div className="flex flex-1">
        <Sidebar
          todos={filtered}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <main className="flex-1">
          <div className="p-6 flex items-center gap-2">
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="New todo title"
            />
            <Button onClick={addTodo}>Add</Button>
          </div>

          <TodoDetails
            todo={selectedTodo}
            onToggle={(completed) => selectedTodo && toggleTodo(selectedTodo.id, completed)}
            onDelete={() => selectedTodo && deleteTodo(selectedTodo.id)}
            onEdit={openEdit}
          />
        </main>
      </div>

      <Footer />

      <UpdateTodoDialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        onSave={saveEdit}
        initialTitle={selectedTodo?.title || ""}
      />
    </div>
  );
}
