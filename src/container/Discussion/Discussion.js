import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import { getAllComments } from "../../services/getAllCommentService";
import "./discussion.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Discussion() {
  const [Comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        setError(true);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  // const postCommentHandler = (comment) => {
  //   axios
  //     .post("/comments", {
  //       ...comment,
  //       postId: 10,
  //     })
  //     .then((res) => axios.get("/comments"))
  //     .then((res) => setComments(res.data))
  //     .catch();
  // };
  const renderComments = () => {
    let rederedValue = <p>Loading...</p>;
    if (error) {
      rederedValue = <p>fetching data failed !</p>;
      toast.error("there is an error");
    }

    if (Comments && !error) {
      rederedValue = Comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectCommentHandler(c.id)}
        />
      ));
    }
    return rederedValue;
  };

  return (
    <main>
      <section>{renderComments()}</section>
      <section>
        <FullComment
          commentId={selectedId}
          setComments={setComments}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
}
