import Link from "next/link";
import React from "react";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => {
  const linkClassName =
    className ||
    "block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 shadow-sm font-serif";

  return (
    <Link href={to} legacyBehavior>
      <a className={linkClassName}>{children}</a>
    </Link>
  );
};

export default NavLink;
