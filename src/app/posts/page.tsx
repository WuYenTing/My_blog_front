import PostList from "./PostList";

const getData = async () => {
  const res = await fetch("http://localhost:4000/api/posts");

  if (!res.ok) {
    return [];
  }

  return res.json();
};

const Home = async () => {
  const response: any = await getData();

  return <PostList posts={response.data} />;
};

export default Home;