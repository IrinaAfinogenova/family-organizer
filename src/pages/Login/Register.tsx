import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useState } from "react";

const API = import.meta.env.VITE_API_URL;

const Register = () => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password, email }),
    });
    const data = await res.json();
    console.log(data) // TODO add function for redirect
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <Input placeholder="Username" value={email} onChange={e => setEmail(e.target.value)} />
      <Input placeholder="email" value={name} onChange={e => setUsername(e.target.value)} />
      <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
