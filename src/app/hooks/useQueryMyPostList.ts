import { useQuery } from "@tanstack/react-query";
import axios from "../axios";
import { useSession } from "next-auth/react";
import { PostDto } from "../models/posts/types";
import { toModel } from "../models/posts";

export const QUERY_MY_POSTS = "QUERY_MY_POSTS";

const queryMyPosts = (accessToken?: string) => async () => {
  const response = await axios.get<{
    data: PostDto[];
  }>("/api/my-posts", {
    headers: {
      Authorization: accessToken,
    },
  });
  return response.data?.data?.map((postDto) => toModel(postDto));
};

const useQueryMyPosts = () => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  return useQuery({
    queryKey: [QUERY_MY_POSTS],
    queryFn: queryMyPosts(accessToken),
    enabled: !!accessToken,
  });
};

export default useQueryMyPosts;