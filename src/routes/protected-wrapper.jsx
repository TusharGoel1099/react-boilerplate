import { Navigate, Outlet } from 'react-router-dom';

export default function  AuthLayout(){
  if("tushar"=="tushar"){
    console.log("hello")
    return <Outlet/>
  }
  else{
    return <Navigate to={"/login"} replace />;
  }
  
};