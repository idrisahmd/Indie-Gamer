import React from "react";
import Image from "next/image";
import Heading from "@/app/components/Heading";
import { getReview, getSlugs } from "@/app/lib/review";
import ShareLinkButton from "@/app/components/ShareLinkButton";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ params: { slug } }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

const ReviewPage: React.FC<{ params: any }> = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  return (
    <>
      <Heading>{slug}</Heading>

      <div className="flex gap-4 align-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        src={`/${slug}.jpg`}
        alt={slug}
        height={360}
        width={640}
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose max-w-screen-sm prose-slate"
      />
    </>
  );
};

export default ReviewPage;
