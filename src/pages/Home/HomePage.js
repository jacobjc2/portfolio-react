import { ProfileImage } from "../../components/ProfileImage";
import "./homepage.css";

export const HomePage = () => {
    return (
        <div class="grid-container">
            <div class="grid-item">
                <ProfileImage/>
                <p class="name">Jacob Christensen</p>
            </div>
            <div class="grid-item about">
                <p class="title">About Me</p>
                <p class="about-content">
                    Hello
                </p>
            </div>
            {/* <div class="grid-item name">Jacob Christensen</div> */}
        </div>
    );
}