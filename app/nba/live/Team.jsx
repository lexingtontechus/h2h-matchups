// Copyright 2023 mitchelleglon
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import Image from "next/image";
import Link from "next/link";

async function Team({ team }) {
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/teams?key=${process.env.API_KEY_NBA}`
  );
  const res = await data.json();

  const requiredTeamArr = res.filter((t) => t.Key === team);
  const reqTeam = requiredTeamArr[0];
  console.log(reqTeam);

  return (
    <div className="flex flex-col flex-1 items-center justify-center content-center">
      <Link href={`/${reqTeam.TeamID}`}>
        {" "}
        <Image src={reqTeam.WikipediaLogoUrl} alt="" width={50} height={50} />
      </Link>
      <h2>{reqTeam.Name}</h2>
    </div>
  );
}

export default Team;
