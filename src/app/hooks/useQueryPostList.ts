import axiosInstance from "../axios";
import { useQuery } from "@tanstack/react-query";
import { PostDto, Post } from "../models/posts/types";
import { toModel } from "../models/posts";

export const QUERY_MY_POSTS = "QUERY_MY_POSTS";

const queryPostList: () => Promise<Post[]> = async () => {
  const response = await axiosInstance.get<{
    data: PostDto[];
  }>("/api/posts");

  // return response.data?.data?.map((postDto) => toModel(postDto));\
  return Array.isArray(response.data?.data)
  ? response.data.data.map((postDto) => toModel(postDto))
  : [];
};

const useQueryPostList = (initialData?: Post[]) => {
  return useQuery({
    queryKey:[QUERY_MY_POSTS], 
    queryFn: queryPostList,
    initialData,
  });
};

export default useQueryPostList;