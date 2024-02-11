import React from "react";
import { Outlet, Link } from "react-router-dom";
export const Home = ()=>{
    return (
        <>
        <h1>hello tushar welcome</h1>
        <Link to="sub">open sub route</Link>
        <Outlet context={{"key":"subroutes"}}/>
        </>
    )
}