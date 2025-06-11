'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShieldPlus, Users2, DatabaseBackup, ArrowLeft } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'ADMIN') {
      router.push('/login?role=ADMIN');
    }
  }, [router]);

  return (
    <main className="dashboard-container">
      {/* Back Button */}
      <motion.button
        onClick={() => router.push('/')}
        className="back-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className="mr-2" />
        Back to Home
      </motion.button>

      {/* Title */}
      <motion.h1
        className="dashboard-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Admin Dashboard
      </motion.h1>

      {/* Action Buttons */}
      <section className="dashboard-actions">
        <motion.button
          onClick={() => router.push('/admin/add-user')}
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShieldPlus size={24} style={{ marginBottom: '0.5rem' }} />
          Add New User
        </motion.button>

        <motion.button
          onClick={() => router.push('/admin/view-users')}
          className="btn-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Users2 size={24} style={{ marginBottom: '0.5rem' }} />
          View Users
        </motion.button>

        <motion.button
          onClick={() => router.push('/admin/backup')}
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DatabaseBackup size={24} style={{ marginBottom: '0.5rem' }} />
          System Backup
        </motion.button>
      </section>
    </main>
  );
}
