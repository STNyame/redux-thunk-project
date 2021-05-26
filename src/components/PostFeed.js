// src/components/PostsFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export default function PostsFeed() {
  const [data, setData] = useState({
    loading: true,
    posts: [],
  });

  async function fetchNext5Posts(offset, limit) {
    setData({ ...data, loading: true });

    // TODO
    // fetch next set of posts (use offset+limit),
    //  and define the variable `morePosts`
    const fetchedPosts = await axios.get(
      `${API_URL}?offset=${offset}&limit=${limit}`
    );
    const morePosts = fetchedPosts.data.rows;
    console.log(morePosts);
    setData({
      loading: false,
      posts: [...data.posts, ...morePosts],
    });
  }

  useEffect(() => {
    fetchNext5Posts(data.posts.length, 5);
  }, []);

  console.log(data);
  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {data.posts &&
        data.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}

      {data.loading ? (
        "Loading..."
      ) : (
        <button onClick={() => fetchNext5Posts(data.posts.length, 5)}>
          Load more posts
        </button>
      )}
    </div>
  );
}
