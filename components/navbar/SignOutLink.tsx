"use client";

import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const SignOutLink = () => {
  const handleLogout = () => {
    toast("Logout Successful");
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
