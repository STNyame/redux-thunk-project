import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPage/actions";
import { selectPostAndComments } from "../store/postPage/selectors";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function PostPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectPostAndComments);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);
  console.log(data);
  return (
    <div>
      {data.loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{data.post.title}</h1>
          <p className="meta">{`${data.post.developer.name} ${moment(
            data.post.developer.createdAt
          ).format("DD-MM-YYYY")} ${data.post.tags.map((tag) => tag.tag)}`}</p>

          <ReactMarkdown children={data.post.content} />

          <h2>Comments</h2>
          {data.comments.rows.map((c) => {
            return (
              <div>
                <ReactMarkdown children={c.text} />
                <p className="meta">{`${c.developer.name} ${moment(
                  c.developer.createdAt
                ).format("DD-MM-YYYY")}`}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
