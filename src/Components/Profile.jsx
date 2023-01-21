import React from "react";
import { useSelector } from "react-redux";

export const Profile = () => {
  let token = useSelector((s) => s.Authreducer.token);
  return (
    <div>
      Profile
      <br />
      Name : {token.name}
      <br />
      E-mail : {token.email}
      <br />
    </div>
  );
};
