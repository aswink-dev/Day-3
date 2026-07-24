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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Add User
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Submit
          </button>
        </form>

        {/* Display Submitted User */}
        {user && (
          <div
            style={{
              marginTop: "25px",
              padding: "15px",
              backgroundColor: "#eef7ff",
              borderRadius: "8px",
              border: "1px solid #b6d4fe",
            }}
          >
            <h3>Submitted User</h3>

            <p>
              <strong>Name:</strong> {user.name}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
