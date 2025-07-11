"use client"

import { Post } from "@/app/models/posts/types";
import Button from "@/app/components/atoms/Button";
import { useRouter } from "next/navigation";
import ErrorMessage from "../../components/atoms/ErrorMessage";
import Loading from "../../components/atoms/Loading";
import useQueryPostList from "../../hooks/useQueryPostList";
import EmptyMessage from "../EmptyMessage";
import Introduction from "../Introduction";
import PostCard from "@/app/components/PostCard";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const { data: postList, isPending, isError} = useQueryPostList(posts);
  const router = useRouter();

  const onGoToCreatePage = () => {
    router.push("/create-post");
  };
  
  if (isPending) 
    return(
      <div className="my-24">
        <Loading />
      </div>
    )

  if (!postList || isError) 
    return(
      <ErrorMessage />
    )
  
  return (
    <main>
      <div className="bg-emerald-950 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-4">
          <div className="">
          </div>
          <Introduction title="From the RoTing" slogan="Learn by trying. Grow by exploring." subslogan="Route it. Learn it. Share it."/>
          <div className="flex justify-center">
              <Button
                className=""
                variant="emerald"
                onClick={onGoToCreatePage}
              >
                Create
              </Button>
            </div>
          <div className="mx-auto max-w-7xl border-t border-gray-200/70 pt-10 sm:pt-8 lg:mx-0 lg:max-w-none">
            {postList.length === 0 ? (
              <EmptyMessage />
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 w-full lg:grid-cols-3">
                {postList.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostList;