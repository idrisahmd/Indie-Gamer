import React from "react";
import Heading from "@/app/components/Heading";
import { getReviewSlugs } from "../lib/review";
import Image from "next/image";
import Link from "next/link";

const Reviews: React.FC = async () => {
  const reviewList = await getReviewSlugs();
  console.log(reviewList, "reviewList");
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviewList.map((slug) => (
          <li
            key={slug.slug}
            className="border bg-white rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${slug.slug}`}>
              <Image
                src={`/${slug.slug}.jpg`}
                alt={slug.slug}
                height={180}
                width={320}
                className="mb-2 rounded-t"
              />
              <h2 className="font-orbitron py-1 text-center">{slug.slug}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
