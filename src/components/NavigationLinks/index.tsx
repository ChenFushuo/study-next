"use client";

import { useRouter } from "next/navigation";
import type { links, linkItem } from "./type";
import "./index.scss";

function NavigationLinks({ links }: links) {
  const router = useRouter();

  return (
    <ul className="menu">
      {links.map((link: linkItem, index: number) => (
        <li
          className="menu_item"
          key={index}
          onClick={() => router.push(link.url)}>
          {link.text}
        </li>
      ))}
    </ul>
  );
}

export default NavigationLinks;
