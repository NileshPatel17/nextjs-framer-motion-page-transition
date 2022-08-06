import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div>
      <Layout title="About">
        <main className={styles.main}>
          <h1 className={styles.title}>About Page</h1>
          <image
            alt="about"
            src="bajrang-bali.jpeg"
            width="300px"
            height="300px"
          />
        </main>
      </Layout>
    </div>
  );
}
