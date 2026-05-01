"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UpdateProfile() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleUpdate = async () => {
    try {
      await authClient.updateUser({
        name,
        image,
      });

      toast.success("Profile Updated!");
    } catch (err) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Update Profile</h1>

      <input
        placeholder="Name"
        className="input input-bordered w-full mb-3"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Image URL"
        className="input input-bordered w-full mb-3"
        onChange={(e) => setImage(e.target.value)}
      />

      <button onClick={handleUpdate} className="btn btn-primary w-full">
        Update Information
      </button>
    </div>
  );
}