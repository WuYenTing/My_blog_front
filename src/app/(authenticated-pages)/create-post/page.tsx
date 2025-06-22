"use client";

import { useSession } from "next-auth/react";
import useCreatePost, { CreatePostParams } from "@/app/hooks/useCreatePost";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import PostForm from "@/app/components/PostForm";

const CreatePost: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const { mutate: createPost, isPending: isSubmitting } = useCreatePost(
    (data) => {
      toast.success("Post created successfully");
      if (data?.id) {
        router.push(`/posts/${data.id}`);
      }
    },
    () => {
      toast.error("Something went wrong while creating post");
    }
  );

  const onSubmit = (values: CreatePostParams) =>
    createPost({
      ...values,
      accessToken: session?.accessToken,
    });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-emerald-950">
      <div className="sm:mx-auto sm:w-full sm:max-w-7xl">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
          Create Post
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-7xl px-8">
        <PostForm
          isPending={isSubmitting}
          onSubmit={onSubmit}
          buttonLabel="Create Post"
        />
      </div>
    </div>
  );
};

export default CreatePost;