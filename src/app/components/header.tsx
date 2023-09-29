import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="max-w-5xl m-auto w-full px-4">
      <div className="flex items-center gap-8 justify-between py-4">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-black hover:opacity-90"
        >
          Logo
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className="font-medium text-sm text-black hover:opacity-90"
            href={"/#features"}
          >
            Features
          </Link>
          <Link
            className="font-medium text-sm text-black hover:opacity-90"
            href={"/#pricing"}
          >
            Pricing
          </Link>
          <Link
            className="font-medium text-sm text-white bg-black px-4 py-2 rounded-lg hover:opacity-90"
            href={"/#dashboard"}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
