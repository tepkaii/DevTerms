// app/not-found.tsx
import Link from "next/link";
import NotFoundSvg from "./components/NotFoundSvg";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 select-none">
      <div className="mb-8">
        <NotFoundSvg />
      </div>

      <div className="text-center">
        <h1 className="md:text-4xl  text-2xl font-bold mb-2">Page Not Found</h1>
        <p className=" md:text-large sm:text-base text-muted-foreground mb-6 text-center ">
          Sorry, we couldn't find the page you were looking for.
        </p>
      </div>
      <Link href="/">
        <button className="px-5 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition">
          Go back home
        </button>
      </Link>
    </div>
  );
}
