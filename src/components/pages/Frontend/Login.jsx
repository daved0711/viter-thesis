import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-2xl rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-10">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@address.com"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute left-3 top-3 text-gray-500"></span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                className="absolute bottom-2.5 right-2"
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <div className="mb-6 text-right">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600
             focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
