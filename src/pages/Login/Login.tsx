import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";

const API = import.meta.env.VITE_API_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO add it to api.ts
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const data = await res.json();

      localStorage.setItem("token", data.token); // TODO keep it in Cookie
      navigate(`/transactions`); //TODO set up default route
    } catch(err) {
      console.error('error:', err);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col">
      <h2>Login</h2>
      <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
