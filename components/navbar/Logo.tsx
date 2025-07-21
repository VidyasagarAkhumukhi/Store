import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <IoStorefrontOutline className="w-7 h-7" />
      </Link>
    </Button>
  );
};

export default Logo;
