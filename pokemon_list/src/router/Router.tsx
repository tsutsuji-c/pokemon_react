import { memo, VFC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from "../components/pages/Home";
import { Pokemon } from "../components/pages/Pokemon";
import { Page404 } from "../components/pages/Page404";

export const Router: VFC = memo(() => {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/pokemon">
                <Pokemon />
            </Route>
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
});