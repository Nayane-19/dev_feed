import "./Comments.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsHandThumbsUp } from "react-icons/bs";
import { Avatar } from "../Avatar";
import { useState } from "react";

export function Comments({comment, onDelete}) {
    const [likes, setLikes] = useState(0);

    function handleLike() {
        setLikes((state) => state + 1)
    }

  return (
    <div className="Comment flex-row">
      <Avatar src={comment.avatarUrl} />
      <div className="right-box flex-column">
        <div className="box-comment flex-row">
          <div className="box-comment-info flex-column">
            <div className="profile-info flex-column">
              <strong>{comment.userName}</strong>
              <span>Cerca de {comment.timePublish} atrás</span>
            </div>
            <p>{comment.comment}</p>
          </div>
          <FaRegTrashAlt onClick={() => onDelete(comment.comment)}/>
        </div>
        <footer className="footer-comment-box">
            <button className="flex-row" onClick={handleLike}>
                <BsHandThumbsUp />
                Aplaudir
                <span className="number">{likes}</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
