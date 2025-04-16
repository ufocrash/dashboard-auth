"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center h-100">
      <div className="flex items-center justify-center">
        <h2>Welcomr {session?.user?.name}</h2>
        <img
          src={session?.user?.image}
          alt="Avatar"
          width={30}
          height={30}
          className="w-16 rounded-full mb-4"
        />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </div>
  );
};

export default DashboardPage;
