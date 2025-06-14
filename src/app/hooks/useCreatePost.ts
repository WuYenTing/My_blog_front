import { useMutation } from "@tanstack/react-query";
import axios from "../axios";
import { Post, PostDto } from "../models/posts/types";
import { toModel } from "../models/posts";

export type CreatePostParams = Pick<
  Post,
  "title" | "description" | "content" | "category" | "tag"
>;

const onMutate = async (params: CreatePostParams) => {
  const { title, description, content, category, tag } = params;

  const response = await axios.post<{
    data: PostDto;
  }>(
    `/api/posts`,
    {
      data: {
        title,
        description,
        content,
        category,
        tag,
      },
    },
  );

  return toModel(response.data?.data);
};

const useCreatePost = (
  onSuccess?: (
    data: Post | null | undefined,
    variables: CreatePostParams,
    context: any
  ) => void,
  onError?: (error: any, variables: CreatePostParams, context: any) => void
) => {
  return useMutation({
    mutationFn: onMutate,
    onSuccess,
    onError,
  });
};

export default useCreatePost;