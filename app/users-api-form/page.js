"use client";

import { useState } from "react";

export default function UsersAPI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone }),
    });

    const data = await res.json();

    console.log(data);

    // Store submitted user
    setUser(data.data);

    // Alert
    alert("User added successfully!");

    // Clear form
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[380px] p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-center mb-6 text-2xl font-bold">Add User</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-lg font-bold cursor-pointer border-0 hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>

        {/* Display Submitted User */}
        {user && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold mb-2 text-lg">Submitted User</h3>

            <p className="text-gray-700">
              <strong>Name:</strong> {user.name}
            </p>

            <p className="text-gray-700">
              <strong>Email:</strong> {user.email}
            </p>

            <p className="text-gray-700">
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}