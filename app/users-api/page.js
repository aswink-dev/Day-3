"use client";
import { useState, useEffect } from "react";

export default function UsersAPI() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Users List (from API)</h1>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", marginTop: "1rem" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
