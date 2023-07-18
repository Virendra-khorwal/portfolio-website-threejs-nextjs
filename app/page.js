import Head from 'next/head';
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Head>
      <title>
        Virendra Khorwal 3D Portfolio
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Virendra Khorwal 3D Portfolio using nextjs and threejs" />
      <meta name="keywords" content="Virendra Khorwal, 3D, Portfolio, threejs" />
      <meta name="author" content="Virendra Khorwal" />

    </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
