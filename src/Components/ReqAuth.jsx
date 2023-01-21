import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  let auth = useSelector((s) => s.Authreducer.isAuth);
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ReqAuth;
