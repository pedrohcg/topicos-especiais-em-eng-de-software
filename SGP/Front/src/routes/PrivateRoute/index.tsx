import React from "react";
import { Navigate } from "react-router-dom";
import { getLSToken } from "../../utils/localStorage";

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<IProps> = ({ children }: IProps) => {
  if (getLSToken() === null) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
