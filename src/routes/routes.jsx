import React from "react";
import {Home} from "../pages/index";
import {useOutletContext} from "react-router-dom";

function Login(){
  const context = useOutletContext()
    return (
        <h1>
            tushar goel
            {context?.key}
        </h1>
    )
}
const ROUTES = [
  { path: "/view", 
  key: "ROOT",
  exact: true,
  component: <Login/>
 },
 { path: "/home", 
  key: "ROOT2",
  exact: true,
  component: <Home/>
 },
  {
    path: "/app/",
    key: "APP",
    component: <Home/>,
    subroutes: [
      {
        path: "sub",
        key: "APP_ROOT",
        exact: true,
        component: <Login/>,
      },
    ],
  },
];

export default ROUTES;