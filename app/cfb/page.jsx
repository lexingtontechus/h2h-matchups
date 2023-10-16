import Link from "next/link";
import Image from "next/image";
import logo from "/public/nba-logo.png";

export default function CFB() {
  return (
    <div className="bg-sky-600 text-white text-center">
      <div className="p-8 ">
        <Image src={logo} className="w-48 m-auto" />
        <h2 className="text-2xl mb-3">The CFB in your pocket</h2>
      </div>
    </div>
  );
}
