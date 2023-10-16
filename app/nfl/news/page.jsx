import Image from "next/image";
import logo from "/public/nbl-logo.gif";
import NewsFeed from "./News";

export default async function News() {
  return (
    <main className="text-center p-5">
      <div className="bg-sky-900 text-white text-center">
        <div className="p-8 ">
          <Image src={logo} className="w-48 m-auto" />
          <h2 className="text-2xl mb-3">The NBA in your pocket</h2>
        </div>
      </div>
      <NewsFeed />
    </main>
  );
}
