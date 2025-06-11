//app/login/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleFromURL = searchParams.get('role') || '';

  const [role, setRole] = useState(roleFromURL);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setRole(roleFromURL);
  }, [roleFromURL]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, role }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userRole', data.role); 
      if (data.role === 'ADMIN') router.push('/admin/dashboard');
      else if (data.role === 'CLINIC_STAFF') router.push('/clinic-staff/dashboard');
    } else {
      setError(data.message || 'Login failed.');
    }
  };

  return (
    <motion.main
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="login-wrapper"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.button
          onClick={() => router.push('/')}
          className="back-button"
          whileHover={{ scale: 1.05, backgroundColor: '#e0e7ff' }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Home
        </motion.button>

        <motion.form
          className="login-form"
          onSubmit={handleLogin}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="login-title">{role ? `${role} Login` : 'Login'}</h2>

          {error && (
            <motion.p
              className="login-error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.p>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <motion.button
            type="submit"
            className="login-button"
            whileHover={{ scale: 1.05, backgroundColor: '#1d4ed8' }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.main>
  );
}
