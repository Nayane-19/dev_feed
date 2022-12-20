import "./Comments.scss";
import Profile from "../../assets/img/profile.png";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsHandThumbsUp } from "react-icons/bs";
import { Avatar } from "../Avatar";

export function Comments() {
  return (
    <div className="Comment flex-row">
      <Avatar src={Profile} />
      <div className="right-box flex-column">
        <div className="box-comment flex-row">
          <div className="box-comment-info flex-column">
            <div className="profile-info flex-column">
              <strong>Nayane Santos</strong>
              <span>Cerca de 2h atrás</span>
            </div>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
          <FaRegTrashAlt />
        </div>
        <footer className="footer-comment-box">
            <button className="flex-row">
                <BsHandThumbsUp />
                Aplaudir
                <span className="number">03</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
