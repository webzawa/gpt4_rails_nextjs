import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:3000/api/v1/posts");
      const data: Post[] = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
