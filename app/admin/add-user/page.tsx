'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AddUserPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CLINIC_STAFF');
  const [message, setMessage] = useState('');

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const res = await fetch('/api/admin/add-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('User added successfully.');
      setEmail('');
      setPassword('');
    } else {
      setMessage(data.message || 'Failed to add user.');
    }
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <motion.button
        onClick={() => router.back()}
        className="mb-4 text-blue-600 hover:underline"
        whileHover={{ scale: 1.05 }}
      >
        ← Back
      </motion.button>

      <motion.h1
        className="text-2xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Add New User
      </motion.h1>

      <form
        onSubmit={handleAddUser}
        className="bg-white shadow p-6 rounded-xl max-w-md space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className="w-full border px-4 py-2 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="CLINIC_STAFF">Clinic Staff</option>
          <option value="ADMIN">Admin</option>
        </select>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          whileHover={{ scale: 1.02 }}
        >
          Add User
        </motion.button>

        {message && <p className="text-center mt-2 text-sm">{message}</p>}
      </form>
    </main>
  );
}
