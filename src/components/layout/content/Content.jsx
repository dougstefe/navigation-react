import "./Content.css"

import { Switch, Route } from "react-router-dom";

import About from "../../../views/examples/About"
import Home from "../../../views/examples/Home"
import Details from "../../../views/examples/Details";
import NotFound from "../../../views/examples/NotFound";

export default function Content() {
    return (
        <main className="content">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/details/:id">
                    <Details />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}