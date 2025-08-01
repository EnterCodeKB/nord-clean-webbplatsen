import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/AuthContext";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); // ✅ använd kontextens login
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password); // ✅ detta uppdaterar context.user
      navigate("/admin");
    } catch (err: any) {
      setError("Fel vid inloggning: " + err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Logga in</h1>
      <input
        type="email"
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Logga in
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default LoginPage;
