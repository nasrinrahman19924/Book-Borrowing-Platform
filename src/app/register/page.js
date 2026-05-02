"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await authClient.signUp.email({
        email: form.email,
        password: form.password,
        name: form.name,
        image: form.image,
      });

      alert("Registered successfully!");
      router.push("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6 space-y-4">

        <h2 className="text-2xl font-bold text-center">Register</h2>

        <form onSubmit={handleRegister} className="space-y-3">

          <input
            className="input input-bordered w-full"
            placeholder="Full Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="input input-bordered w-full"
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <input
            className="input input-bordered w-full"
            placeholder="Photo URL"
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />

          <button className="btn btn-success w-full">
            Register
          </button>
        </form>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}