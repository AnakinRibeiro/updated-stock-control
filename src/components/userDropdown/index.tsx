"use client";

import { signOut } from "next-auth/react";

export const UserDropdown = () => {
  //   console.log(localStorage.getItem("oncrets_token"));

  const handleLogout = async () => {
    await signOut();
  };

  return <span onClick={() => handleLogout()}>User</span>;
};
