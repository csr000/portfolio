// import './globals.css'
import Head from "next/head";
import "./index.css";
import "./fonts.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Richard Stephen",
  description: "Richard Stephen's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aldrich&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <div className="bg-site bg-no-repeat bg-cover overflow-hidden min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
