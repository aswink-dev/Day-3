"use client";

import { useState, useEffect } from "react";

export default function UsersAPI() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Enable editing
  const handleEdit = (user) => {
    setEditingId(user._id);
    setEditData({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  };

  // Update user
  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/users/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });

      if (!res.ok) {
        throw new Error("Failed to update user");
      }

      setEditingId(null);
      fetchUsers();
    } catch (error) {
      alert(error.message);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete user");
      }

      fetchUsers();
    } catch (error) {
      alert(error.message);
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingId(null);
    setEditData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Users <span className="text-indigo-500">Directory</span>
          </h1>

          <p className="mt-2 text-zinc-400">
            Users fetched from your Next.js API Route.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-zinc-800 bg-zinc-900">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase text-zinc-300">
                    Name
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase text-zinc-300">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase text-zinc-300">
                    Phone
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase text-zinc-300">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-zinc-800 hover:bg-zinc-800/70"
                  >
                    {/* Name */}
                    <td className="px-6 py-4">
                      {editingId === user._id ? (
                        <input
                          type="text"
                          value={editData.name}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              name: e.target.value,
                            })
                          }
                          className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-indigo-500"
                        />
                      ) : (
                        user.name
                      )}
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4">
                      {editingId === user._id ? (
                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              email: e.target.value,
                            })
                          }
                          className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-indigo-500"
                        />
                      ) : (
                        user.email
                      )}
                    </td>

                    {/* Phone */}
                    <td className="px-6 py-4">
                      {editingId === user._id ? (
                        <input
                          type="text"
                          value={editData.phone}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 outline-none focus:border-indigo-500"
                        />
                      ) : (
                        user.phone
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      {editingId === user._id ? (
                        <div className="flex gap-2">
                          <button
                            onClick={handleUpdate}
                            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                          >
                            Save
                          </button>

                          <button
                            onClick={handleCancel}
                            className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(user)}
                            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => handleDelete(user._id)}
                            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {users.length === 0 && (
              <div className="py-10 text-center text-zinc-400">
                No users found.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
