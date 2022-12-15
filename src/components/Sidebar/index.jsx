import "./SideBar.scss"
import { AiOutlineEdit } from "react-icons/ai";
import Profile from "../../assets/img/profile.png"
import { Button } from "../Button/"

export function Sidebar() {
    return (
        <aside className="Sidebar">
            <div className="block-images-profile">
                <img src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="" className='img-background' />
                <div className="profile">
                    <img src={Profile} alt="profile image" />
                </div>
            </div>
            <div className="info-profile">
                <h6>Nayane Santos</h6>
                <span>Desenvolvedora FrontEnd</span>
            </div>
            <footer className="block-end">
                <Button variant="transparent" className="btn-edit-profile">
                    <AiOutlineEdit />
                    Editar seu perfil
                </Button>
            </footer>
        </aside>
    )
}