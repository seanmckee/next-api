import React from "react";
import Header from "../components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log("user is logged in");
  } else {
    await redirect("api/auth/signin");
  }

  return (
    <div className="">
      <Header />
      <div className="max-w-5xl m-auto w-full px-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
