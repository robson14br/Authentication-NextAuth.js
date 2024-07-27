"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function ButtonLogout() {
  return (
    <div className="">
    <button className="btn btn-outline" onClick={() => signOut()}>
      Logout
    </button>
    </div>
  );
}