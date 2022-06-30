import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Notfound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooops....</h1>
      <h2>that page cannot be found</h2>
      <p className="not-found">
        Go back to the link{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
