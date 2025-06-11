'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import './globals.css';

export default function LandingPage() {
  const router = useRouter();

  const bounceTransition = {
    y: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: "easeInOut",
    },
  };

  return (
    <main className="landing-container">
      {/* Top Bar with Logo and Buttons */}
      <div className="top-bar">
        <motion.div
          className="logo-text"
          onClick={() => router.push('/')}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          MedAccess
        </motion.div>

        <motion.div
          className="top-right-buttons"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button onClick={() => router.push('/login?role=ADMIN')}>Admin Login</button>
          <button onClick={() => router.push('/login?role=CLINIC_STAFF')}>Clinic Staff Login</button>
        </motion.div>
      </div>

      <motion.div
        className="landing-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="landing-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome to MedAccess Africa
        </motion.h1>

        <motion.p
          className="landing-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          A smart health referral system connecting patients, clinics, and specialists efficiently across Africa.
        </motion.p>

        <motion.div
          className="landing-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button
            className="btn-primary"
            onClick={() => router.push('/about')}
            animate={{ y: [0, -10, 0] }}
            transition={bounceTransition}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </main>
  );
}
