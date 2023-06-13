import { FC } from "react";

import Post from "../../models/postModel";

interface PostProps {
  post: Post;
}

const PostCard: FC<PostProps> = (props) => {
  const {
    post: { body, title, id },
  } = props;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
    <div className="text-xl font-bold mb-2">{id}</div>
    <div className="text-base">
      <h5 className="text-xl font-bold mb-2">{title}</h5>
      <p className="mb-4">{body}</p>
      <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Read More...
      </div>
    </div>
  </div>
  );
};

export default PostCard;