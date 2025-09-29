import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const {id, name, email, phone } = user;

  const userstyle = {
    border: "2px solid green",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div>
      <div style={userstyle}>
        <p>Nmae:{name}</p>
        <p>email:{email}</p>
        <p> phone{phone}</p>
        <Link to={`/users/${id}`}>show de</Link>
      </div>
    </div>
  );
};

export default User;
