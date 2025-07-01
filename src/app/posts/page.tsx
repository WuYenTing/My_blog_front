import { toModel } from "../models/posts";
import { PostDto } from "../models/posts/types";
import PostList from "../posts/PostList";

const getData = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts` as string);
  // if (!res.ok) {
  //   return [];
  // }
  // return res.json();
  try {
    const res = await fetch(`${process.env.API_URL}/api/posts` as string);
    if (!res.ok) return [];
    return await res.json();
  } catch (e) {
    console.error("fetch error", e);
    return [];
  }
};

const Home = async () => {
  const response: any = await getData();
  console.log(response)
  return (
    <PostList
      posts={response.data?.map((postDto: PostDto) => toModel(postDto))}
    />  
  )
};

export default Home;