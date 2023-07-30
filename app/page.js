import { Hero, Navbar } from "@/components";
import Head from "next/head";
import Image from "next/image";
import bgImage from "../public/herobg.png";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Virendra Khorwal 3D Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Virendra Khorwal 3D Portfolio using nextjs and threejs"
        />
        <meta
          name="keywords"
          content="Virendra Khorwal, 3D, Portfolio, threejs"
        />
        <meta name="author" content="Virendra Khorwal" />
      </Head>
      <main className="flex relative z-0 bg-primary flex-col">
        <Image src={bgImage} className="bg-cover bg-no-repeat bg-center absolute" alt="bg" />
        <Navbar />
        <Hero />
        <About />
        {/* ADD EXPERIENCE COMPONENT */}
        {/* ADD TECH COMPONENT */}
        {/* ADD WORKS COMPONENT */}
        {/* ADD CONTACT COMPONENT */}
      </main>
    </>
  );
}
