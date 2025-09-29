import React from "react";

const User = ({ user }) => {
  const { name, email, phone } = user;

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
      </div>
    </div>
  );
};

export default User;
