import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/cupcake.png" width={64} height={64} />
          </a>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/cupcakes">
        <a>Cupcakes-listing</a>
      </Link>
    </nav>
  );
};

export default NavBar;
