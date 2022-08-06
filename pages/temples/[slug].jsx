import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';

export default function Temple() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div style={{ display: 'grid' }}>
      <div style={{ posiiton: 'absolute', top: 0, left: 0 }}>
        <Link href="/temples">Back to the list</Link>
      </div>
      <motion.img
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        }}
        width="480px"
        height="400px"
        src={`/${slug}`}
        alt="temple"
      />
    </div>
  );
}
