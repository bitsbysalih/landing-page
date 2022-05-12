import Beyin from "../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
      <div>
      <Link href="/">
        <a >
        <Image src={Beyin} alt="Beyin Logo" />
        </a>
      </Link>
      </div>
  );
}
