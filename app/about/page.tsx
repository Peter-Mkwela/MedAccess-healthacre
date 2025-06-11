'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LearnMorePage() {
  const router = useRouter();

  return (
    <motion.main
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="about-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="about-title">About MedAccess</h1>
        <p className="about-text">
          MedAccess is a smart healthcare referral system designed to bridge the gap between patients,
          clinics, and specialist services across Africa. It allows health professionals to refer patients
          quickly and track their medical journeys efficiently.
        </p>
        <p className="about-text">
          Our goal is to make quality healthcare more accessible and streamlined, reducing wait times,
          improving data sharing, and supporting informed medical decisions.
        </p>
        <p className="about-text">
          Built using modern web technologies, MedAccess empowers both rural and urban communities
          by enhancing coordination between health facilities.
        </p>

        <motion.button
          className="btn-primary about-back"
          onClick={() => router.push('/')}
          whileHover={{ scale: 1.05, backgroundColor: '#1d4ed8' }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Home
        </motion.button>
      </motion.div>
    </motion.main>
  );
}
