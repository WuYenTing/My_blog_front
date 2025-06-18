import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../axios";
import { QUERY_MY_POSTS } from "./useQueryMyPostList";
import { Post } from "../models/posts/types";

interface DeleteParams {
  id: string;
  accessToken: string;
}

const onMutate = async (params: DeleteParams) => {
  const { id, accessToken } = params;

  await axios.delete(`/api/my-posts/${id}`, {
    headers: {
      Authorization: accessToken,
    },
  });

  return {
    id,
  };
};

const useDeletePost = (
  onSuccess?: (
    data: { id: string },
    variables: DeleteParams,
    context: any
  ) => void,
  onError?: (error: any, variables: DeleteParams, context: any) => void
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: onMutate,
    onSuccess: (data, variables, context) => {
      const postList = queryClient.getQueryData<Post[]>([QUERY_MY_POSTS]);

      if (postList) {
        queryClient.setQueryData(
          [QUERY_MY_POSTS],
          postList.filter((item) => item?.id !== data?.id)
        );
      }
      if (onSuccess) {
        onSuccess(data, variables, context);
      }
    },
    onError,
  });
};

export default useDeletePost;