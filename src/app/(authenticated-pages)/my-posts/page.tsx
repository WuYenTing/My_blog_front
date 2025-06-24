"use client";

import PostCard from "@/app/components/PostCard";
import Button from "@/app/components/atoms/Button";
import ErrorMessage from "@/app/components/atoms/ErrorMessage";
import Loading from "@/app/components/atoms/Loading";
import useDeletePost from "@/app/hooks/useDeletePost";
import useQueryMyPosts from "@/app/hooks/useQueryMyPostList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import DeletePostModal from "./DeletePostModal";

const MyPosts: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [confirmDeleteId, setConfirmDeleteId] = useState<string | undefined>(
    undefined
  );

  const { data: posts, isPending, isError } = useQueryMyPosts();
  const { mutate: onDeletePost, isPending: isDeleting } = useDeletePost(
    () => {
      setConfirmDeleteId(undefined);
      toast.success("Post deleted successfully");
    },
    () => {
      toast.error("Something went wrong while deleting post");
    }
  );

  if (isPending)
    return (
      <div className="my-24">
        <Loading />
      </div>
    );

  if (isError)
    return <ErrorMessage />;

  const onUpdate = (id: string) => () => router.push(`/update-post/${id}`);
  const onDelete = (id: string) => () => setConfirmDeleteId(id);
  const onConfirmDelete = () => {
    if (!confirmDeleteId || !session?.accessToken) return;

    onDeletePost({
      id: confirmDeleteId,
      accessToken: session?.accessToken,
    });
  };
  const onCancelDelete = () => setConfirmDeleteId(undefined);

  return (
    <>
      <div className="bg-emerald-950 py-12 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl text-center">
            My Posts
          </h2>
          {!posts || posts?.length === 0 ? (
            <div className="text-center">
              <div className="mt-6 text-gray-300 text-lg text-center">
                There is no posts created. Please create the first one.
              </div>
              <Button
                variant="green"
                className="mt-4"
                onClick={() => router.push("/create-post")}
              >
                Create
              </Button>
            </div>
          ) : (
            <div className="mt-12 mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts?.map((post) => (
                <PostCard
                  key={post.id}
                  {...post}
                  onUpdate={onUpdate(post.id)}
                  onDelete={onDelete(post.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <DeletePostModal
        open={!!confirmDeleteId}
        isPending={isDeleting}
        onClose={onCancelDelete}
        onDelete={onConfirmDelete}
      />
    </>
  );
};

export default MyPosts;