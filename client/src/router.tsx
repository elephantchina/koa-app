import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import path from 'path';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import routes from './routerConfig';

// 载入默认全局样式 normalize
import '@alifd/next/reset.scss';

const RouteItem = props => {
  const { redirect, path: routePath, component, key } = props;
  if (redirect) {
    return <Redirect exact key={key} from={routePath} to={redirect} />;
  }
  return <Route key={key} component={component} path={routePath} />;
};

const router = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          {routes.map((route, id) => {
            const { component: RouteComponent, children, ...others } = route;
            return (
              <Route
                key={id}
                {...others}
                component={props => {
                  return children ? (
                    <RouteComponent key={id} {...props}>
                      <Switch>
                        {children.map((routeChild: any, idx:any) => {
                          const {
                            redirect,
                            path: childPath,
                            component,
                          } = routeChild;
                          return RouteItem({
                            key: `${id}-${idx}`,
                            redirect,
                            path: childPath && path.join(route.path, childPath),
                            component,
                          });
                        }) as any}
                      </Switch>
                    </RouteComponent>
                  ) : (
                    <>
                      {RouteItem({
                        key: id,
                        ...props,
                      })}
                    </>
                  );
                }}
              />
            );
          })}
          <Redirect exact from="/" to="/app/main" />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default router;
