import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/review";

export const metadata = {
  title: "Review",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews Page</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="bg-white border rounded w-80 shadow hover:shadow-2xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt={review.slug}
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-semibold font-orbitron text-center py-1">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
