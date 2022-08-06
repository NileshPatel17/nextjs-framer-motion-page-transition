import '../styles/globals.css';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const MountTransition = ({ children, slide = 0, slideUp = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: slide, y: slideUp }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
      exit={{ opacity: 0, x: slide, y: slideUp }}
    >
      {children}
    </motion.div>
  );
};

function MyApp({ Component, router, pageProps }) {
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          display: 'block',
          width: '100%',
        }}
      >
        Page Transition with Framer Motion
      </h1>
      {/* <pre>{JSON.stringify(router, null, 2)}</pre> */}
      <nav>
        <ul>
          <li
            style={{
              borderBottom:
                router.state.pathname === '/' ? '2px solid #0070f3' : null,
            }}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            style={{
              borderBottom:
                router.state.pathname === '/about' ? '2px solid #0070f3' : null,
            }}
          >
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          <MountTransition>
            <Component {...pageProps} />
          </MountTransition>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
