import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPost = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Grand Circus",
      thought: "Grand Circus is cool",
    },
    { id: 2, title: "React", thought: "React gave me power!" },
    {
      id: 3,
      title: "Beatrice",
      thought: "My friend Beatrice has mad skills. She has made the top 10!",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const closeForm = () => setShowForm(false);

  const addPost = (post: Post): void => {
    setPosts((prev) => {
      return [...prev, post];
    });
  };

  const deletePost = (index: number): void => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  return (
    <div className="SocialPosts">
      <header>
        <h1>My Thoughts</h1>
      </header>
      <button onClick={() => setShowForm(true)}>New Thought</button>
      {showForm && <PostForm closeForm={closeForm} addPost={addPost} />}
      <ul>
        {posts.map((post, i) => (
          <PostInList post={post} index={i} onDelete={deletePost} />
        ))}
      </ul>
    </div>
  );
};

export default SocialPost;
