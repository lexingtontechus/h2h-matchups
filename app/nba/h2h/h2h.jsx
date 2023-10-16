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
              <img className="mask mask-circle" src="/curryst01.jpg" />
            </div>

            <p>
              <Link
                href="https://www.basketball-reference.com//players/c/curryst01.html"
                target="_blank"
                className="text-primary"
              >
                Stephen Curry
              </Link>
            </p>
          </div>

          <div className="py-8">
            <img src="/stathead-bbr.svg" />
          </div>

          <div>
            <div className="avatar max-h-[174px]">
              <img className="mask mask-circle" src="/youngtr01.jpg" />
            </div>

            <p>
              <Link
                href="https://www.basketball-reference.com//players/y/youngtr01.html"
                target="_blank"
                className="text-primary"
              >
                Trae Young
              </Link>
            </p>
          </div>
        </div>

        <div className="block text-center">Head-to-Head</div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div>
            <div className="">2-2</div>
          </div>
          <div className="text-secondary">
            <div>Reg Season</div>
          </div>
          <div>
            <div className="">2-2</div>
          </div>
        </div>
        <div className="text-center">Overall Stats</div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div>
            <div className="text-primary">882</div>
            <div>24.6</div>
            <div className="text-primary">4.7</div>
            <div>6.5</div>
            <div className="text-primary">1.6</div>
            <div className="text-primary">0.2</div>
            <div className="text-primary">.475</div>
            <div className="text-primary">.428</div>
            <div className="text-primary">.909</div>
            <div className="text-primary">.583</div>
            <div className="text-primary">6.6</div>
            <div className="text-primary">65.6</div>
          </div>
          <div className="text-secondary">
            <div>G</div>
            <div>PTS/G</div>
            <div>TRB/G</div>
            <div>AST/G</div>
            <div>STL/G</div>
            <div>BLK/G</div>
            <div>FG%</div>
            <div>3P%</div>
            <div>FT%</div>
            <div>eFG%</div>
            <div>BPM</div>
            <div>VORP</div>
          </div>
          <div>
            <div>353</div>
            <div className="text-primary">25.5</div>
            <div>3.7</div>
            <div className="text-primary">9.3</div>
            <div>1.0</div>
            <div>0.1</div>
            <div>.437</div>
            <div>.351</div>
            <div>.876</div>
            <div>.505</div>
            <div>3.1</div>
            <div>15.3</div>
          </div>
        </div>

        <div className="row text-center">Awards &amp; Honors</div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div>
            <div className="text-primary">4</div>

            <div className="text-primary">4</div>

            <div className="text-primary">9</div>

            <div className="text-primary">2</div>

            <div className="text-primary">1</div>

            <div className="text-primary">9</div>
          </div>
          <div className="text-secondary">
            <div>Championships</div>
            <div>1st Team All-NBA</div>

            <div>All-NBA</div>

            <div>MVP</div>

            <div>Finals MVP</div>

            <div>All-Star</div>
          </div>
          <div>
            <div>0</div>

            <div>0</div>

            <div>1</div>

            <div>0</div>

            <div>0</div>

            <div>2</div>
          </div>
        </div>
      </div>
      <H2HStats />
    </>
  );
}
