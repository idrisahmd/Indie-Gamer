import Image from "next/image";
import Link from "next/link";
import Heading from "@/app/components/Heading";
import { getFeaturedReview } from "./lib/review";

export default async function Home() {
  const feturedReview = await getFeaturedReview();
  return (
    <main>
      <Heading>Indie Gamer</Heading>
      <p className="pb-4">Only the best indie gamers, reviewed for you</p>
      <div className="border bg-white rounded shadow w-80 hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${feturedReview.slug}`}
          className="flex flex-col sm:flex-row gap-2 sm:gap-0"
        >
          <Image
            src={"/" + feturedReview.slug + ".jpg"}
            alt={feturedReview.slug}
            height={180}
            width={320}
            className="mb-2 rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-orbitron font-bold py-1 text-center sm:px-2">
            {feturedReview.title}
          </h2>
        </Link>
      </div>
    </main>
  );
}
