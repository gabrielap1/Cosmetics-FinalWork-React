import React from "react";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as PiIcons from "react-icons/pi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <MdIcons.MdHome />,
    cName: "nav-text",
  },
  {
    title: "Makeup",
    path: "/makeup",
    icon: <GiIcons.GiLips />,
    cName: "nav-text",
  },
  {
    title: "Hair",
    path: "/hairs",
    icon: <MdIcons.MdFace4 />,
    cName: "nav-text",
  },
  {
    title: "Skin",
    path: "/skin",
    icon: <PiIcons.PiHandSoapFill />,
    cName: "nav-text",
  },
  {
    title: "Body",
    path: "/body",
    icon: <GiIcons.GiBodySwapping />,
    cName: "nav-text",
  },
  {
    title: "Gifts",
    path: "/gifts",
    icon: <GiIcons.GiPresent />,
    cName: "nav-text",
  },
];
