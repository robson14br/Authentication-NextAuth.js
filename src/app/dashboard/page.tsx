import { getServerSession } from "next-auth";
import React from "react";
import ButtonLogout from "./ButtonLogout";
import { redirect } from "next/navigation";



export default async function Page() {
  const session = await getServerSession();

  if(!session) {
    redirect("/")
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>Ola {session?.user?.name}</div>
      <div> Logado </div>
      <div>
        <ButtonLogout/>
      </div>
    </div>
  );
}
