// Absolute imports
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Containers
import PageContainer from '../Containers/PageContainer';

// Pages
const Home = lazy(() => import('../Pages/Home'));
const UserDetails = lazy(() => import('../Pages/UserDetails'));
const PostDetails = lazy(() => import('../Pages/PostDetails'));

const UndefinedRoute = () => <h1>404</h1>;

export default () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <PageContainer>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/user/:userId" component={UserDetails} exact />
          <Route path="/user/:userId/:postId" component={PostDetails} />

          <Route component={UndefinedRoute} />
        </Switch>
      </PageContainer>
    </Suspense>
  </Router>
);
