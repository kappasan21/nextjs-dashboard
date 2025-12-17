import Link from 'next/link';


export default function PageA() {
  return (
    <>
      <h1>Page A</h1>
      {/* 1. Using Next.js Link (Client-Side) */}
      <Link href="/dashboard">
        Go to Page B (using Next.js Link)
      </Link>

      <br />

      {/* 2. Using standard HTML a (Full Reload) */}
      <a href="/dashboard">
        Go to Page B (using standard a tag)
      </a>
    </>
  );
}