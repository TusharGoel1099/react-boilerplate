import { Route, Routes } from 'react-router-dom';
import ROUTES from "./routes";
import AuthLayout from "./protected-wrapper"
export function RenderRoutes() {
    return (
      <Routes>
        {/* use for protecting routing */}
        <Route element={<AuthLayout/>}> 
        {ROUTES.map((route) => {
        if (route.subroutes) {
          return (
            <Route
              path={route.path}
              key={route.key}
              element={route.component}
            >
              {route.subroutes.map((subroute) => (
                <Route
                  path={subroute.path}
                  exact={subroute.exact}
                  key={subroute.key}
                  element={subroute.component}
                />
              ))}
            </Route>
          );
        }
        return (
          <Route
            path={route.path}
            exact={route.exact}
            key={route.key}
            element={route.component}
          />
        );
      })}
        </Route>
        <Route path= "*" element={<NotFound/>} />
      </Routes>
    );
  }

function NotFound(){
    return (
        <h1>
        not found
        </h1>
    )
}
export default RenderRoutes;
