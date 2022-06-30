import Head from "next/head";
import Link from "next/link";
import styles from "../styles/CupcakeListing.module.css";

const Cupcakes = () => {
  return (
    <>
      <Head>
        <title>Cupcakes | cupcakes-listing </title>
        <meta name="keywords" content="cupcakes" />
      </Head>
      <div>
        <h1>Cupcakes</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          saepe officia rerum minus maxime nesciunt exercitationem facilis in
          amet, reiciendis ducimus possimus enim ut nostrum commodi numquam
          dignissimos sunt libero fugiat quos magnam rem perspiciatis est sint!
          Sequi, illo facilis.
        </p>
        <p>
          To view{" "}
          <Link href="/ariecupcake/">
            <a className={styles.listing}>cupcake-listings</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Cupcakes;
