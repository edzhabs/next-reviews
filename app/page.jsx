import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/review";
import Link from "next/link";

export default async function HomePage() {
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you!</p>
      <div className="bg-white border rounded w-80 shadow hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt={review.slug}
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron text-center py-1 sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
