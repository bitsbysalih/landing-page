import Beyin from "../../public/logo.svg";
import Image from "next/image";

export default function Logo() {
  return (
      <div>
        <Image src={Beyin} alt="Beyin Logo" />
      </div>
  );
}
