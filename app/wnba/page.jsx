"use client";
import Script from "next/script";
import Image from "next/image";
import logo from "/public/wnba-logo.png";

//{new Date().getFullYear()}
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDate = new Date().getDate();
const lastYear = new Date().getFullYear() - 1;
//const season = {lastYear}'-'{currentYear};

const datadate =
  { currentYear } + "-" + { currentMonth } + "-" + { currentDate };
const dataseason = { lastYear } + "-" + { currentYear };

export default function WNBA() {
  return (
    <>
      <div className="bg-sky-600 text-white text-center">
        <div className="p-8 ">
          <Image src={logo} className="w-48 m-auto" />
          <h2 className="text-2xl mb-3">The NBA in your pocket</h2>
        </div>
      </div>
      <div>
        <script
          type="application/javascript"
          src="https://widgets.media.sportradar.com/uscommon/widgetloader"
          data-sr-language="en_us"
          async=""
        ></script>
        <div
          className="sr-widget"
          data-sr-widget="us.match.score"
          data-sr-match-id="20716135"
        ></div>
      </div>
    </>
  );
}
