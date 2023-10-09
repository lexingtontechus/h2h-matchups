import { Providers } from "./providers";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata = {
  title: {
    default: "H2H MATCHUPS",
    template: "%s / Lexington Sports",
  },
  description:
    "Head To Head MatchUps Sport App Demo. A Lexington Tech Sports Demo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Providers>
        <body
          className="font-play"
          style={{ maxWidth: "100vw", margin: "auto" }}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
