import CommentItem from "./CommentItem";

export default function CommentList({ comments, onDelete, onUpdate }) {
    return (
        <div className="comment-list">
            {comments.map((comment) => {
                return (
                    <CommentItem key={comment.id} comment={comment} onDelete={onDelete} onUpdate={onUpdate} />
                );
            })}
        </div>
    );
}
