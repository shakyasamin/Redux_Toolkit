import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedSelector";
import { getPosts } from "./features/posts/postSlice";
import Loader from "./components/UI/Loader";
import PostCard from "./components/PostCard/PostCard";


const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { loading, data } = useAppSelector((state) => state);

  return (
<div className="container py-5">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {loading ? (
      <Loader />
    ) : (
      data &&
      data.map((post) => (
        <div className="col-span-1 md:col-span-1 lg:col-span-1" key={post.id}>
          <PostCard post={post} />
        </div>
      ))
    )}
  </div>
</div>
  );
};

export default App;