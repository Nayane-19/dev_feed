import "./Post.scss"
import Profile from "../../assets/img/profile.png"
import { Button } from "../Button"
import { Comments } from "../Comments"
import { Avatar } from "../Avatar"

export function Post() {
    return (
        <article className="Post">
            <header>
                <div className="info-profile">
                    <div className="profile">
                        <Avatar src={Profile} />
                    </div>
                    <div className="info-name">
                        <strong>Nayane Santos</strong>
                        <span>Desenvolvedora FrontEnd</span>
                    </div>
                </div>
                <time dateTime="15/12/2022 15:00:00">Publicado há 1h</time>
            </header>
            <div className="content">
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><strong>👉 jane.design/doctorcare</strong></p>
                <p>
                    <strong>#novoprojeto</strong>
                    <strong>#nlw</strong>
                    <strong>#rocketseat</strong>
                </p>
            </div>
            <form className="feedback">
                <textarea rows="3" placeholder="Deixe seu comentário aqui" />
                <Button type="submit">Publicar</Button>
            </form>
            <Comments />
        </article>
    )
}