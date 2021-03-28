# React Typescript

### Private Route

When using React Router sometimes you need private routes which only authenticated users can access. If you're not authenticated then you should be sent back home. This render props component which extends the React Router Route component does just that.

```tsx
import React from "react";
import { Route, Redirect } from "react-router-dom";

type PrivateTypes = {
  component: any;
  path: string;
};

const PrivateRoute = ({ component: Component, ...rest }: PrivateTypes) => {
  let isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
export default PrivateRoute;
```
