import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const {website, name} = user
  return (
    <div>
      <h2>This is UserDetails Page</h2>
      <p>website {website} </p>
      <p>name {name} </p>
    </div>
  );
};

export default UserDetails;
