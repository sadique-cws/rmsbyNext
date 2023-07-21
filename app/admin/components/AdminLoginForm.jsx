"use client";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      alert(data.msg);
    } catch (error) {
      console.error("Error occurred during login:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 w-full">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">Login</h2>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-white">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full rounded-lg px-4 py-2 bg-gray-700 text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-lg px-4 py-2 bg-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
