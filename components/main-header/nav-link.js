"use client";
import Link from "next/link";
import React from "react";
import Styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";
const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${Styles.Link} ${Styles.active}` : Styles.Link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
