"use client";
import Link from "next/link";
import Image from "next/image";
import H2HStats from "./h2h-stats";

export default function H2H() {
  return (
    <>
      <div className="inline-block w-full">
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div className="mx-auto">
            <div className="avatar">
              <img className="mask mask-circle" src="/bradyt01.jpg" />
            </div>

            <p>
              <Link
                href="https://www.pro-football-reference.com//players/B/BradTo00.htm"
                target="_blank"
                className="text-primary"
              >
                Tom Brady
              </Link>
            </p>
          </div>

          <div className="py-8">
            <img className="py-8" src="/stathead-bbr.svg" />
          </div>

          <div>
            <div className="avatar max-h-[174px]">
              <img className="mask mask-circle" src="/manningp01.jpg" />
            </div>

            <p>
              <Link
                href="https://www.pro-football-reference.com//players/M/MannPe00.htm"
                target="_blank"
                className="text-primary"
              >
                Peyton Manning
              </Link>
            </p>
          </div>
        </div>

        <div className="block text-center">Head-to-Head</div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div>
            <div className="">9-33</div>
          </div>
          <div className="text-secondary">
            <div>Reg Season</div>
          </div>
          <div>
            <div className="">3-9</div>
          </div>
        </div>
        <div className="text-center">Overall Stats</div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div>
            <div className="text-primary">335</div>
            <div className="text-primary">326</div>
            <div className="text-primary">251-82-0</div>
            <div>64.3</div>
            <div className="text-primary">89214</div>
            <div>7.4</div>
            <div>266.3</div>
            <div className="text-primary">649</div>
            <div className="text-primary">212</div>
            <div className="text-primary">97.2</div>
            <div className="text-primary">693</div>
            <div className="text-primary">1123</div>
            <div className="text-primary">1.6</div>
            <div className="text-primary">28</div>
            <div className="text-primary">5943.4</div>
          </div>
          <div className="text-secondary">
            <div>G</div>
            <div>AV</div>
            <div>QBrec</div>
            <div>Cmp%</div>
            <div>Pass Yds</div>
            <div>Pass Y/A</div>
            <div>Pass Y/G</div>
            <div>Pass TD</div>
            <div>Int</div>
            <div>Rate</div>
            <div>Rush Att</div>
            <div>Rush Yds</div>
            <div>Rush Y/A</div>
            <div>Rush TD</div>
            <div>FantPt</div>
          </div>
          <div>
            <div>266</div>
            <div>271</div>
            <div>186-79-0</div>
            <div className="text-primary">65.3</div>
            <div>71940</div>
            <div className="text-primary">7.7</div>
            <div className="text-primary">270.5</div>
            <div>539</div>
            <div>251</div>
            <div>96.5</div>
            <div>431</div>
            <div>667</div>
            <div>1.5</div>
            <div>18</div>
            <div>4686.3</div>
          </div>
        </div>

        <div className="row text-center">Awards &amp; Honors</div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div>
            <div></div>
            <div className="text-primary">7</div>
            <div className="text-primary">15</div>
            <div>6</div>
            <div>3</div>
            <div className="text-primary">2</div>
            <div className="text-primary">5</div>
          </div>
          <div className="text-secondary">
            <div>Hall of Fame</div>
            <div>Championships</div>
            <div>Pro Bowl</div>
            <div>All Pro</div>
            <div>AP MVP</div>
            <div>AP Off. PoY</div>
            <div>SB MVP</div>
          </div>
          <div>
            <div>✅</div>
            <div>2</div>
            <div>14</div>
            <div className="text-secondary">10</div>
            <div className="text-secondary">5</div>
            <div className="text-secondary">2</div>
            <div className="text-secondary">1</div>
          </div>
        </div>
      </div>
      <H2HStats />
    </>
  );
}
