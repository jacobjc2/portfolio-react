import '../assets/navbar.css';

export const Navbar = () => {
    return (
        <nav class="navbar">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/experience">Experience</a>
            </li>
            <li>
                <a href="/projects">My Projects</a>
            </li>
            <li>
                <a href="/contact">Contact Me</a>
            </li>
        </nav>
    );
}