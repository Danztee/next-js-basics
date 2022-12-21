// our-domain.com/news
import Link from "next/link";

export const NewsPage = () => {
  return (
    <>
      <h1>The NewsPage</h1>
      <ul>
        <li>
          <Link href="news/next-is-a-great">nextJs is a great framework</Link>
        </li>
        <li>something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
