import { memo, VFC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from "../components/pages/Home";
import { Pokemon } from "../components/pages/Pokemon";
import { Page404 } from "../components/pages/Page404";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const Router: VFC = memo(() => {
    return(
        <Switch>
            <Route exact path="/">
                <DefaultLayout><Home /></DefaultLayout>
            </Route>
            <Route path="/pokemon">
            <DefaultLayout><Pokemon /></DefaultLayout>
            </Route>
            <Route path="*">
            <DefaultLayout><Page404 /></DefaultLayout>
            </Route>
        </Switch>
    )
});