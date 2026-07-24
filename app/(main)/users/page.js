"use client";

import { useEffect, useState } from "react";
import Card from "../../../components/Card";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Users</h1>
          <p className="mt-2 text-gray-500">
            Explore the list of registered users.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center py-20">
            <p className="text-lg text-gray-500">Loading users...</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {users.map((user) => (
              <Card key={user.id} title={user.name} desc={user.email} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
