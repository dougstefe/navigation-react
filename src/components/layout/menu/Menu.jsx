import "./Menu.css"
import {Link} from "react-router-dom"
export default function Menu() {
    return (
        <aside className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/details/xpto">Details</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/not-found">Not found</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}