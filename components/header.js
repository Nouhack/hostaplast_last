import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  HiOutlineArrowRight,
  HiChartPie,
  HiShoppingBag,
  HiInbox,
  HiUser,
  HiArrowSmRight,
  HiTable,
  HiHome,
  HiOfficeBuilding,
  HiQuestionMarkCircle,
  HiNewspaper,
  HiMenu,
} from "react-icons/hi";
import { MdContactSupport } from "react-icons/md";

import { Navbar, Sidebar, Button, Dropdown } from "flowbite-react";
import Link from "next/link";
import { attributes, react as HomeContent } from "../content/metadata.md";

const Slider = ({ state }) => {
  return (
    <Sidebar
      className={`w-screen z-50 ${state ? "block" : "hidden"}`}
      aria-label="Sidebar with multi-level dropdown example"
    >
      <Sidebar.Items
        style={{
          borderBottomColor: "black",
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
        }}
      >
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiHome} href="/">
            Accueil
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiOfficeBuilding} label="Notre compagnie">
            <Sidebar.Item href="/aboutus">À propos de nous</Sidebar.Item>
            <Sidebar.Item href="/value">Valeurs</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={HiQuestionMarkCircle}
            label="Pour quoi nous ?"
          >
            <Sidebar.Item href="/advantages">Avantages</Sidebar.Item>
            <Sidebar.Item href="/solution">Solutions</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="/news" icon={HiNewspaper}>
            Nouvelles
          </Sidebar.Item>
          <Sidebar.Item href="/contactus" icon={MdContactSupport}>
            Contactez nous
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default function Header() {
  const [openSlider, setopenSlider] = useState(false);
  let { logo, logolabel, theme } = attributes;
  const router = useRouter();

  return (
    <div className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <Navbar fluid={true} rounded={true}>
        <Link href="/">
          <Navbar.displayName className="flex flex-row">
            <img src={logo} className="mr-3 h-10 sm:h-16" alt="Flowbite Logo" />
            <span
              className="font-mono self-center whitespace-nowrap font-bold hidden md:block text-xl font-semibold dark:text-white"
              style={{
                fontFamily: "'Unbounded', cursive",
              }}
            >
              {logolabel}
            </span>
          </Navbar.displayName>
        </Link>
        <div className="flex md:order-2">
          <Link href="/client" passHref>
            <Button
              pill
              style={{
                backgroundColor: theme,
              }}
            >
              Espace client
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <button
            className="lg:hidden "
            onClick={() => {
              setopenSlider((prev) => !prev);
            }}
          >
            <HiMenu size={30} className="ml-5" />
          </button>
        </div>

        <Navbar.Collapse>
          <Link href="/">
            <Navbar.displayName
              style={{
                color: router.pathname === "/" && theme,
              }}
            >
              Accueil
            </Navbar.displayName>
          </Link>

          <Dropdown label="Notre compagnie" inline={true}>
            <Dropdown.Item>
              <Link href="/aboutus">À propos de nous</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/value">Valeurs</Link>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown label="Pourquoi nous ?" inline={true}>
            <Dropdown.Item>
              <Link href="/advantages">Avantages</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/solution">Solution</Link>
            </Dropdown.Item>
          </Dropdown>

          <Link href="/news">
            <Navbar.displayName
              style={{
                color: router.pathname === "/news" && theme,
              }}
            >
              Nouvelles
            </Navbar.displayName>
          </Link>

          <Link href="/contactus">
            <Navbar.displayName
              style={{
                color: router.pathname === "/contactus" && theme,
              }}
            >
              Contactez Nous
            </Navbar.displayName>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <Slider state={openSlider} />
    </div>
  );
}
