import React from "react";
import useAuth from "../../Hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="fw-light text-center">Welcome</h2>
      <h1 className="fw-light text-center">{user.displayName}</h1>
    </div>
  );
}
