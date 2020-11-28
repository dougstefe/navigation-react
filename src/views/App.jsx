import "./App.css"
import Content from "../components/layout/content/Content"
import Menu from "../components/layout/menu/Menu"
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
    return (
        <div className="app">
            <Router>
                <Menu />
                <Content />
            </Router>
            
        </div>
    )
}