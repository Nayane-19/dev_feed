import "./Post.scss"
import { Button } from "../Button"
import { Comments } from "../Comments"
import { Avatar } from "../Avatar"
import { useState } from "react"


export function Post({post}) {
    const [newComment, setNewComment] =  useState("");
    const [comments, setComments] = useState([]);

    function onDelete(comment) {
        setComments(comments?.filter(item => item.comment != comment))
    }

    function handleChange(text) {
        event.target.setCustomValidity("")
        setNewComment(text)
    }

    function handleSubmit() {
        event.preventDefault();
        setComments([
            ...comments,
            {
                userName: "Nayane Santos",
                avatarUrl: "https://avatars.githubusercontent.com/u/53491642?v=4",
                timePublish: "2h",
                comment: newComment,
            }
        ])
        setNewComment("");
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório")
    }

    return (
        <article className="Post">
            <header>
                <div className="info-profile">
                    <div className="profile">
                        <Avatar src={post.avatarUrl} />
                    </div>
                    <div className="info-name">
                        <strong>{post.userName}</strong>
                        <span>{post.role}</span>
                    </div>
                </div>
                <time dateTime="15/12/2022 15:00:00">Publicado {post.timePublish}</time>
            </header>
            <div className="content">
                {post.content.map(item => {
                    return (
                        <p key={item.text}>{item.type === "strong" ? <strong>{item.text}</strong> : item.text}</p>
                    );
                })}
            </div>
            <form className="feedback" onSubmit={handleSubmit}>
                <textarea
                  required
                  rows="3"
                  placeholder="Deixe seu comentário aqui"
                  value={newComment}
                  onChange={(e) => handleChange(e.target.value)}
                  onInvalid={handleNewCommentInvalid}
                />
                <Button type="submit">Publicar</Button>
            </form>
            {comments?.map(comment => {
                return (
                    <Comments comment={comment} key={comment.comment} onDelete={onDelete} />
                )
            })}
        </article>
    )
}