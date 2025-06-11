'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ClinicStaffDashboard() {
  const router = useRouter();

  useEffect(() => {
    // Redirect if role is not Clinic Staff
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'CLINIC_STAFF') {
      router.push('/login?role=CLINIC_STAFF');
    }
  }, [router]);

  return (
    <main className="dashboard-container">
      <motion.h1
        className="dashboard-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Clinic Staff Dashboard
      </motion.h1>

      <section className="dashboard-welcome">
        <p>Welcome, Clinic Staff! Manage patients and record visits here.</p>
      </section>

      <section className="dashboard-actions">
        <button
          className="btn-primary"
          onClick={() => router.push('/patients/register')}
        >
          Register New Patient
        </button>

        <button
          className="btn-secondary"
          onClick={() => router.push('/patients')}
        >
          View Patients
        </button>

        <button
          className="btn-primary"
          onClick={() => router.push('/visits')}
        >
          Record/View Visits
        </button>
      </section>
    </main>
  );
}
