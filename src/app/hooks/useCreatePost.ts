import { useMutation } from "@tanstack/react-query";
import axios from "../axios";
import { Post, PostDto } from "../models/posts/types";
import { toModel } from "../models/posts";

export type CreatePostParams = Pick<
  Post,
  "title" | "description" | "content" | "category" | "tag"
> & {
  accessToken?: string;
};

const onMutate = async (params: CreatePostParams) => {
  const { title, description, content, category, tag, accessToken } = params;

  const response = await axios.post<{
    data: PostDto;
  }>(
    `/api/my-posts`,
    {
      data: {
        title,
        description,
        content,
        category,
        tag,
      },
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
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