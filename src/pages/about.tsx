import Head from "next/head"
import Link from 'next/link'
export default function About() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div>
          <h1>
            Sobre
          </h1>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </body>

    </>
  )
}
