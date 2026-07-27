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
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Users <span className="text-indigo-500">Directory</span>
          </h1>
          <p className="mt-2 text-zinc-400">
            Users fetched from your Next.js API Route.
          </p>
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-2xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-zinc-800 bg-zinc-900">
                <tr>
                 
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    Phone
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-zinc-800 transition-colors duration-200 hover:bg-zinc-800/70"
                  >
              
                    <td className="px-6 py-4 font-medium text-white">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 text-zinc-300">{user.email}</td>
                    <td className="px-6 py-4 text-zinc-300">{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {users.length === 0 && (
              <div className="py-10 text-center text-zinc-400">
                Loading users...
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
