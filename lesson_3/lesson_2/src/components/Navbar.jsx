import { NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Main</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;