import { ProfileImage } from "../../components/ProfileImage";
import "./homepage.css";

export const HomePage = () => {
    return (
        <div class="grid-container">
            <div class="grid-item">
                <ProfileImage/>
            </div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
        </div>
    );
}