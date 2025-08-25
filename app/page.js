import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <div>
        <h1>
          <Link href="meals">Meals</Link>
        </h1>
        <h1>
          <Link href="meals/share">Share</Link>
        </h1>
        <h1>
          <Link href="community">Community</Link>
        </h1>
      </div>
    </div>
  );
}
