// src/components/PostsFeed.js
import React, { useEffect } from "react";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { fetchNext5Posts } from "../store/feed/actions";
import { Link } from "react-router-dom";
import { selectUser } from "../store/auth/selectors";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
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
            {user.accessToken ? (
              <Link style={{ textDecoration: "none" }} to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
            ) : (
              <Link style={{ textDecoration: "none" }} to={`/login`}>
                <h3>{post.title}</h3>
              </Link>
            )}
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
