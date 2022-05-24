import Link from "next/link";
import Image from "next/image";
import bgImage from "../../public/contect.png";
import Logo from "../logo/whiteLogo";

function Side() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Image src={bgImage} alt="Beyin Image" layout="fill"  width='400' />
      <div
        style={{
          position: "relative",
          left: "4.38%",
          right: "89.29%",
          top: "7.87%",
          bottom: "87.5%",
        }}
      >
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Side;
