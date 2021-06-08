import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';

import IndexPage from '../components/IndexPage';
import Uploader from '../components/Uploader';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Header/>
    <div className="content-container">
      <Switch>
        <Route path="/" component={IndexPage} exact={true}/>
        <Route path="/upload" component={Uploader} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;