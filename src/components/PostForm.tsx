import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";
import "./SocialPosts";

interface Props {
  closeForm: () => void;
  addPost: (post: Post) => void;
}

const PostForm = ({ closeForm, addPost }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    addPost({ title, thought });
    closeForm();
  };

  return (
    <div className="post-form-container">
      <div className="post-form-box">
        <button onClick={closeForm}>X</button>
        <form className="PostForm" onSubmit={formSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="thought">Thought</label>
          <textarea
            name="thought"
            id="thought"
            cols={30}
            rows={10}
            value={thought}
            onChange={(e) => {
              setThought(e.target.value);
            }}
          ></textarea>
          <button>Submit Post</button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
