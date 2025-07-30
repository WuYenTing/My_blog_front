import PostDetail from "./PostDetail";

async function getData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post data.");
  }

  return res.json();
}

interface ParamsType {
  params: {
    id: string;
  };
}

const PostDetailPage = async (props: Promise<ParamsType>) => {
  const { params } = await props;
  const data = await getData(params.id);

  return <PostDetail {...data.data} />;
};


export default PostDetailPage;