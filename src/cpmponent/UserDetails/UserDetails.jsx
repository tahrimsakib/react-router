import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { website, name } = user;

  const navigate = useNavigate();
  return (
    <div>
      <h2>This is UserDetails Page</h2>
      <p>website {website} </p>
      <p>name {name} </p>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
};

export default UserDetails;
