import { Route, Switch } from "react-router";
import { Home } from "../pages/Home";
import { PokemonDetail } from "../pages/PokemonDetail";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Home /> } />
            <Route exact path="/pokemon/:id" render={() => <PokemonDetail /> } />
        </Switch>
    );
}