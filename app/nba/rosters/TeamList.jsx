import Image from "next/image";
import Link from "next/link";

export default function TeamList({ teamInfo }) {
  // console.log(teamInfo);
  return (
    <div className="flex justify-between items-center w-2/4">
      <div className="mx-auto p-4">
        <Link href={`/nba/${teamInfo.TeamID}`}>
          <Image
            src={teamInfo.WikipediaLogoUrl}
            width={150}
            height={150}
            className="btn btn-ghost mask mask-square p-2 bg-accent h-[150px] w-[150px]"
          />
        </Link>
      </div>
      {/* <div className="flex-1 p-3">
        <h1>
          {teamInfo.City} {teamInfo.Name}
        </h1>
        <h2>{teamInfo.Conference} Conference</h2>
        <h2>{teamInfo.Division} Division</h2>
      </div> */}
    </div>
  );
}
