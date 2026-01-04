import { useState } from "react";
import { useAuth } from "../app/providers/AuthProvider";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signup(email, password);
      window.location.replace("/todos");
    } catch (e) {
      setErr(e.message || "Failed to sign up");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <form onSubmit={submit} className="w-80 p-6 border rounded space-y-3">
        <h1 className="text-xl font-semibold">Create account</h1>
        {err && <div className="text-red-600 text-sm">{err}</div>}
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <Button type="submit" className="w-full">Sign up</Button>
        <div className="text-sm">
          Already have an account? <a className="text-blue-600" href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}
