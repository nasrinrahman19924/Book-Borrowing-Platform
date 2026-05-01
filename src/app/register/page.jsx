"use client";

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Register</h1>

      <form className="space-y-4">
        <input className="input input-bordered w-full" placeholder="Name" />
        <input className="input input-bordered w-full" placeholder="Email" />
        <input className="input input-bordered w-full" placeholder="Photo URL" />
        <input className="input input-bordered w-full" type="password" placeholder="Password" />

        <button className="btn btn-primary w-full">
          Register
        </button>
      </form>
    </div>
  );
}