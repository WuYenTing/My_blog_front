"use client";

import ErrorMessage from "@/app/components/atoms/ErrorMessage";
import Loading from "@/app/components/atoms/Loading";
import useQueryPostDetail from "@/app/hooks/useQueryPostDetail";
import useUpdatePost from "@/app/hooks/useUpdatePost";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import PostForm from "@/app/components/PostForm";
import { CreatePostParams } from "@/app/hooks/useCreatePost";
import { useSession } from "next-auth/react";

const UpdatePost: React.FC = () => {
  const { postId } = useParams() || {};
  const { data: session } = useSession();
  const router = useRouter();

  const {
    data: postDetail,
    isPending: isFetchingPostDetail,
    isError: isFetchPostDetailError,
  } = useQueryPostDetail(postId as string);

  const { mutate: updatePost, isPending: isSubmitting } = useUpdatePost(
    (data) => {
      toast.success("Post updated successfully");
      if (data?.id) {
        router.push(`/posts/${data.id}`);
      }
    },
    () => {
      toast.error("Something went wrong while updating post");
    }
  );

  const onSubmit = (values: CreatePostParams) =>
    updatePost({
      ...values,
      id: postId as string,
      accessToken: session?.accessToken,
    });

  if (isFetchingPostDetail)
    return (
      <div className="my-24">
        <Loading />
      </div>
    );

  if (isFetchPostDetailError || !postDetail) return <ErrorMessage />;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-emerald-950">
      <div className="sm:mx-auto sm:w-full sm:max-w-7xl">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
          Update Post
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-7xl px-8">
        <PostForm
          isPending={isSubmitting}
          defaultValues={{
            title: postDetail?.title,
            description: postDetail?.description,
            content: postDetail?.content,
            category: postDetail?.category,
            tag: postDetail?.tag,
          }}
          onSubmit={onSubmit}
          buttonLabel="Update Post"
        />
      </div>
    </div>
  );
};

export default UpdatePost;