"use client";
import Link from "next/link";

export default function Footer(props) {
  return (
    <div className="btm-nav btm-nav-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full px-4">
            <div className="text-sm text-primary font-semibold text-center">
              Copyright © {new Date().getFullYear()}{" "}
              <Link
                href="https://lexingtontech.us"
                target="_blank"
                className="text-primary hover:text-secondary text-sm font-semibold px-2 uppercase"
              >
                Lexington Tech LLC
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
