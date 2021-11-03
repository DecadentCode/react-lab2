import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  index: number;
  onDelete: (index: number) => void;
}

const PostInList = ({ post, index, onDelete }: Props) => {
  return (
    <li className="PostInList">
      <div>
        <div className="post-header">
          {<h2>{post.title}</h2>}
          <i className="fas fa-trash" onClick={() => onDelete(index)}></i>
        </div>
        <p>{post.thought}</p>
      </div>
    </li>
  );
};

export default PostInList;
