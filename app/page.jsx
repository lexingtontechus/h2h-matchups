import Link from "next/link";
import Image from "next/image";
import logo from "../public/nba-logo2.png";
import logonba from "../public/nba-logo2.png";
import logownba from "../public/wnba-logo2.png";
import logonfl from "../public/nfl-logo.gif";

export default function Home() {
  return (
    <div className="bg-sky-600 text-white text-center">
      <div className="p-8">
        <h1 className="text-5xl my-5">MatchUps By Lexington Sports</h1>
        <div className="carousel carousel-center max-w-md h-68 p-4 space-x-4 bg-white rounded-box">
          <div className="carousel-item">
            <Link href="/nba">
              <Image src={logonba} className="rounded-box w-32 h-56" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link href="/wnba">
              <Image src={logownba} className="rounded-box w-32 h-56" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link href="/nfl">
              <Image src={logonfl} className="rounded-box w-48 h-56" />
            </Link>
          </div>
          <div className="carousel-item">
            <Image src={logo} className="rounded-box w-32 h-56" />
          </div>
          <div className="carousel-item">
            <Image src={logo} className="rounded-box w-32 h-56" />
          </div>
          <div className="carousel-item">
            <Image src={logo} className="rounded-box w-32 h-56" />
          </div>
          <div className="carousel-item">
            <Image src={logo} className="rounded-box w-32 h-56" />
          </div>
        </div>
      </div>
    </div>
  );
}
