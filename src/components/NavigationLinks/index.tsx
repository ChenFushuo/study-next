"use client";

import type { links, linkItem } from "./type";
import "./index.scss";
import Link from "next/link";

function NavigationLinks({ links }: links) {
  return (
    <div className="menu">
      {links.map((link: linkItem, index: number) => (
        <Link className="menu_item" href={link.url} key={index}>
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export default NavigationLinks;
