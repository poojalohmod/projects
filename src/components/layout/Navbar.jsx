import { useAuth } from "../../app/providers/AuthProvider";
import { Button } from "../ui/button";

export default function Navbar({ filter, setFilter }) {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b">
      <div className="font-semibold text-lg">Todos</div>
      <div className="flex items-center gap-2">
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant={filter === "completed" ? "default" : "outline"} onClick={() => setFilter("completed")}>
          Completed
        </Button>
        <Button variant={filter === "pending" ? "default" : "outline"} onClick={() => setFilter("pending")}>
          Pending
        </Button>
      </div>
      <div className="flex items-center gap-2">
        {user ? (
          <Button variant="destructive" onClick={logout}>Sign out</Button>
        ) : (
          <a href="/login"><Button>Sign in</Button></a>
        )}
      </div>
    </nav>
  );
}
