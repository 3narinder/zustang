import { usePoststore } from "./usePostStore";

const PostCounter = () => {
  const postCount = usePoststore((state) => state.posts.length);
  return <h3>Total posts: {postCount}</h3>;
};

export default PostCounter;
