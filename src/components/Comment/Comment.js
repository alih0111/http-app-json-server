import "./comment.css";
export default function Comment({ name, email ,onClick}) {
  return (
      <div className="comment" onClick={onClick}>
        <p>name: {name}</p>
        <p>email: {email}</p>
      </div>
  );
}
