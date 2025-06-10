import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const QUERY_MY_POSTS = "QUERY_MY_POSTS";

export interface PostDto {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  category: string;
  created_at: Date;
}

export interface Post {
  id: string;
  tag: string;
  title: string;
  description: string;
  content: string;
  category: string;
  created_at: Date;
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

const queryPostList: () => Promise<Post[]> = async () => {
  const response = await axiosInstance.get<{
    data: PostDto[];
  }>("/api/posts");
  return response.data?.data?.map((postDto) => ({
    ...postDto,
    createdAt: postDto?.created_at ? new Date(postDto?.created_at) : undefined,
  }));
};

const useQueryPostList = (initialData?: Post[]) => {
  return useQuery({
    queryKey:[QUERY_MY_POSTS], 
    queryFn: queryPostList,
    initialData,
  });
};

export default useQueryPostList;