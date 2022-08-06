import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Temple() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div style={{ display: 'grid' }}>
      <div style={{ posiiton: 'absolute', top: 0, left: 0 }}>
        <Link href="/temples">Back to the list</Link>
      </div>
      <img width="400px" height="350px" src={`/${slug}`} alt="temple" />
    </div>
  );
}
