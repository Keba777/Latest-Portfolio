"use client";

import { FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { MdWork } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, label: "About", href: "/", icon: FaRegUser },
  { id: 2, label: "Resume", href: "/resume", icon: CgNotes },
  { id: 3, label: "Projects", href: "/projects", icon: MdWork },
  { id: 4, label: "Blogs", href: "/blogs", icon: FaBlogger },
  { id: 5, label: "Contact", href: "/contact", icon: BiSolidContact },
];

const NavBar = () => {
  const currentPath = usePathname();
  return (
    <nav className="bg-common-white text-body-text rounded-2xl p-7 flex space-x-3 ml-40">
      {links.map(({ id, label, href, icon: Icon }) => (
        <Link key={id} href={href} passHref>
          <span
            className={`rounded-xl p-4 flex flex-col items-center ${
              currentPath === href
                ? "bg-theme-secondary text-white"
                : "bg-light-black"
            } hover:bg-theme-secondary hover:text-white  `}
          >
            <Icon className="w-5 h-5 mb-1" />
            <p className="text-sm">{label}</p>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
