import axios from "axios";
import { useEffect, useState } from "react";
import "./fullComment.css";
import { deleteComment } from "../../services/deleteCommentService";
import { getAllComments } from "../../services/getAllCommentService";
import { getOneComment } from "../../services/getOneCommentService";
export default function FullComment({ commentId, setComments, setSelectedId }) {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch((err) => console.log(err));
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      const { data } = await getAllComments();
      setComments(data);
      setComment(null);
      setSelectedId(null);
    } catch (err) {}
  };

  let commentDetail = <p>please select a comment !</p>;
  if (commentId) commentDetail = <p>Loading...</p>;
  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p> {comment.name} </p>
        <p> {comment.email} </p>
        <p> {comment.body} </p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
  }
  return commentDetail;
}
