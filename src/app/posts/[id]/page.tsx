import PostDetail from "./PostDetail";

interface PostDetailProps {
  params: Promise<{ id: string }>;
}

async function getData(id: string) {
  const res = await fetch(`${process.env.API_URL}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post data.");
  }

  return res.json();
}


const PostDetailPage = async ({ params }: PostDetailProps) => {
  const { id } = await params;
  const data = await getData(id);

  return <PostDetail {...data.data} />;
};

export default PostDetailPage;