import PostDetail from "./PostDetail";

async function getData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`);
  
  if (!res.ok) {
    return [];
  }

  return res.json();
}

interface PostDetailProps {
  params: {
    id: string;
  };
}

const PostDetailPage: React.FC<PostDetailProps> = async ({ params }) => {
  const { id } = await params || {};

  const response: any = await getData(id);
  return <PostDetail {...response.data} />;
};

export default PostDetailPage;

// export default async function PostDetailPage({ params }: { params: { id: string } }) {
//   const { id } = params;

//   const response: any = await getData(id);

//   return <PostDetail {...response.data} />;
// }