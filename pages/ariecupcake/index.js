import Link from "next/link";
import styles from "../../styles/ArieCupcakes.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { cupcakes: data },
  };
};

const Cupcakes = ({ cupcakes }) => {
  return (
    <div>
      <h1>Hello to all Cupcakes</h1>
      {cupcakes.map((cupcake) => (
        <Link href={`/ariecupcake/${cupcake.id}`} key={cupcake.id}>
          <a className={styles.single}>
            <h3>{cupcake.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Cupcakes;
