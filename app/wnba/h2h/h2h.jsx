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
              <img className="mask mask-circle" src="/fowlesy01w.jpg" />
            </div>

            <p>
              <Link
                href="https://www.basketball-reference.com//wnba/players/f/fowlesy01w.html"
                target="_blank"
                className="text-primary"
              >
                Sylvia Fowles
              </Link>
            </p>
          </div>

          <div className="py-8">
            <img className="py-8" src="/stathead-bbr.svg" />
          </div>

          <div>
            <div className="avatar max-h-[174px]">
              <img className="mask mask-circle" src="/grinebr01w.jpg" />
            </div>

            <p>
              <Link
                href="https://www.basketball-reference.com//players/y/youngtr01.html"
                target="_blank"
                className="text-primary"
              >
                Brittney Griner
              </Link>
            </p>
          </div>
        </div>

        <div className="block text-center">Head-to-Head</div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div>
            <div className="text-primary">16-6</div>
            <div className="text-primary">5-2</div>
          </div>
          <div className="text-secondary">
            <div>Reg Season</div>
            <div>Playoffs</div>
          </div>
          <div>
            <div>6-16</div>
            <div>2-5</div>
          </div>
        </div>
        <div className="text-center">Overall Stats</div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div>
            <div className="text-primary">408</div>
            <div>15.7</div>
            <div className="text-primary">9.8</div>
            <div>1.1</div>
            <div className="text-primary">1.2</div>
            <div>1.8</div>
            <div className="text-primary">.599</div>
            <div className="text-primary">1.000</div>
            <div>0.728</div>
            <div className="text-primary">0.599</div>
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
          
          </div>
          <div>
            <div>285</div>
            <div className="text-primary">17.7</div>
            <div>7.5</div>
            <div className="text-primary">1.9</div>
            <div>0.5</div>
            <div className="text-primary">2.7</div>
            <div>.560</div>
            <div>.269</div>
            <div className="text-primary">.801</div>
            <div>0.561</div>
            
          </div>
        </div>

        <div className="row text-center">Awards &amp; Honors</div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center text-center">
          <div>
            <div className="text-primary">2</div>
            <div className="text-primary">3</div>
            <div className="text-primary">8</div>
            <div className="text-primary">11</div>
            <div className="text-primary">1</div>
            <div className="text-primary">4</div>
            <div className="text-primary">2</div>
            <div className="text-primary">8</div>
          </div>
          <div className="text-secondary">
            <div>Championships</div>
            <div>1st Team All-WNBA</div>
            <div>All-WNBA</div>
            <div>All-Def</div>
            <div>MVP</div>
            <div>DPOY</div>
            <div>Finals MVP</div>
            <div>All-Star</div>
          </div>
          <div>
            <div>1</div>
            <div className="text-primary">3</div>
            <div>6</div>
            <div>7</div>
            <div>&nbsp;</div>
            <div>2</div>
            <div>&nbsp;</div>
            <div className="text-primary">8</div>
          </div>
        </div>
      </div>
      <H2HStats />
    </>
  );
}
