import { memo, VFC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Top } from "../components/pages/Top";
import { Pokemon } from "../components/pages/Pokemon";
import { Page404 } from "../components/pages/Page404";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const Router: VFC = memo(() => {
    return(
        <Switch>
            <Route exact path="/">
                <DefaultLayout><Top /></DefaultLayout>
            </Route>
            <Route path="/?page=:id">
            <DefaultLayout><Top /></DefaultLayout>
            </Route>
            <Route path="/pokemon/:id">
            <DefaultLayout><Pokemon /></DefaultLayout>
            </Route>
            <Route path="*">
            <DefaultLayout><Page404 /></DefaultLayout>
            </Route>
        </Switch>
    )
});