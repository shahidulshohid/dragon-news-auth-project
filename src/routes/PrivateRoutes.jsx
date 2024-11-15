/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";

const PrivateRoutes = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location)

  if(loading){
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>; //==================
};

export default PrivateRoutes;
