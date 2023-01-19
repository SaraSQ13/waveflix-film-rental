import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserService from "../../_services/UserService";

export default function UserProfile() {
  const { id } = useParams();

  useEffect(() => {
    UserService.getMoviesFromUser(id).then((res) => {
      setMovie(res.data.data);
    });
  });

  return (
    <div>
      User
      <h2>hola</h2>
    </div>
  );
}
