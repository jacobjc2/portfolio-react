import profileImage from '../assets/profileImage.jpg';
import '../assets/profileimage.css';

export const ProfileImage = () => {
    return (
        <div class="profile-container">
            <img src={profileImage} alt="Profile Pic"/>
        </div>
    );
}