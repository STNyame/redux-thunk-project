// src/components/PostsFeed.js
import React, { useEffect } from "react";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { fetchNext5Posts } from "../store/feed/actions";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);
  const data = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts());
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {data &&
        data.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{moment(post.createdAt).format("DD-MM-YYYY")}</p>
            <p>
              {post.tags.map((tag, i) => (
                <button key={i}>{tag.tag}</button>
              ))}
            </p>
          </div>
        ))}

      {loading ? (
        "Loading..."
      ) : (
        <button onClick={() => dispatch(fetchNext5Posts())}>
          Load more posts
        </button>
      )}
    </div>
  );
}
