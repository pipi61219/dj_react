import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component = {ArticleList} />
        <Route exact path='/api/:articleID' component = {ArticleDetail} />
   </div>

);

export default BaseRouter;