import { useRouter } from "next/router";

// our-domain.com/news/something-important
export const DetailPage = () => {
  const router = useRouter();

  const newId = router.query.newsId;

  console.log(newId);

  return <h1>The DetailPage</h1>;
};

export default DetailPage;
