import PostDetail from "./PostDetail";

async function getData(id: string) {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`);
  const res = await fetch(`${process.env.API_URL}/api/posts/${id}`);
  if (!res.ok) {
    return [];
  }

  return res.json();
}

// interface PostDetailProps {
//   params: {
//     id: string;
//   };
// }

// const PostDetailPage: React.FC<PostDetailProps> = async ({ params }) => {
//   const { id } = await params || {};

//   const response: any = await getData(id);
//   return <PostDetail {...response.data} />;
// };

// export default PostDetailPage;

// https://stackoverflow.com/questions/79124951/type-error-in-next-js-route-type-params-id-string-does-not-satis
async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response: any = await getData(id);

  return <PostDetail {...response.data} />;
}

export default PostDetailPage;