export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((cupcake) => {
    return {
      params: {
        id: cupcake.id.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: {
      cupcake: data,
    },
  };
};

const Details = ({ cupcake }) => {
  return (
    <div>
      <h1>{cupcake.name}</h1>
      <p>{cupcake.email}</p>
      <p>{cupcake.website}</p>
      <p>{cupcake.address.city}</p>
    </div>
  );
};

export default Details;
