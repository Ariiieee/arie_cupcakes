import NavBar from "../components/NavBar";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Cupcakes | about</title>
        <meta name="keywords" content="cupcakes" />
      </Head>

      <div>
        <h1>This is the about page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi,
          accusamus sit quidem, adipisci rem quia perspiciatis reprehenderit
          natus autem molestias molestiae laudantium. Quasi amet ex aliquam,
          fugit, optio deleniti facilis quos harum tenetur qui eligendi incidunt
          deserunt sequi dolorum.
        </p>
      </div>
    </>
  );
};

export default About;
