// Login.jsx
import React, { useState } from "react";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    // basic validation
    if (!userId.trim()) {
      setError("Please enter your user id.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }

    // Replace this with real login call
    console.log("Logging in:", { userId, password });
    // Example: call API, then redirect on success
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-headingFont font-bold text-slate-800">
            Welcome back
          </h1>
          <p className="text-sm text-slate-500 mt-1">Sign in to continue to your account</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="form-error">
          {error && (
            <div
              id="form-error"
              role="alert"
              className="text-sm text-red-700 bg-red-100 px-3 py-2 rounded-md"
            >
              {error}
            </div>
          )}

          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-slate-700">
              User ID
            </label>
            <input
              id="userId"
              name="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
              placeholder="Enter your email or username"
              autoComplete="username"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-sm text-sky-600 hover:underline"
                // replace with actual forgot-password route
              >
                Forgot?
              </a>
            </div>

            <div className="relative mt-1">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border border-slate-200 px-3 py-2 pr-10 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-pressed={showPassword}
                className="absolute inset-y-0 right-1 flex items-center px-2 text-slate-500 hover:text-slate-700"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3-11-7 1.07-2.12 2.67-3.86 4.6-4.88M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3-11-7 1.07-2.12 2.67-3.86 4.6-4.88M3 3l18 18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-300" />
              <span className="ml-2 text-slate-600">Remember me</span>
            </label>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-sm text-sky-600 hover:underline"
            >
              New user? Sign up
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-lg px-4 py-2 text-white font-semibold shadow-sm transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-cyan-200/50
                bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-500 hover:to-cyan-500"
            >
              Log in
            </button>
          </div>
        </form>

        {/* small footer / help */}
        <div className="mt-6 text-center text-sm text-slate-500">
          <p>
            By continuing you agree to our{" "}
            <a href="#" onClick={(e) => e.preventDefault()} className="text-sky-600 hover:underline">
              Terms & Conditions
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
