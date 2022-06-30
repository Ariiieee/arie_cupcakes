import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cupcakes | Home</title>
        <meta name="keywords" content="cupcakes" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          nostrum quae reiciendis repudiandae atque fugit libero in nemo veniam!
          Dignissimos in sit inventore sapiente officia eligendi, aut dicta vero
          ut blanditiis quos id culpa odio accusantium! Vitae eaque est officia!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem recusandae praesentium fugiat ex beatae ipsa culpa
          cumque laboriosam nulla? Earum exercitationem quisquam amet
          perferendis ratione nulla quos cupiditate similique quia.
        </p>
        <Link href="/cupcakes">
          <a className={styles.btn}>See cupcakes listing</a>
        </Link>
      </div>
    </>
  );
}
