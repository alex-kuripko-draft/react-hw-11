import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import RouteEnum from '../enums/route.enum';

const Home = lazy(() => import('../../components/pages/home'));
const ArticlesList = lazy(() => import('../../components/pages/articles-list'));
const Article = lazy(() => import('../../components/pages/article'));
const NotFoundPage = lazy(() => import('../../components/pages/not-found'));

const routes = [
  {
    path: RouteEnum.HOME,
    Component: Home,
  },
  {
    path: RouteEnum.ARTICLES,
    Component: ArticlesList,
  },
  {
    path: RouteEnum.ARTICLE,
    Component: Article,
  },
  { path: RouteEnum.NOT_FOUND, Component: NotFoundPage },
  { path: '*', Component: () => <Navigate to={RouteEnum.NOT_FOUND} replace /> },
];

export default routes;
