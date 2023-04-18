//import 'tw-elements'
import "tailwindcss-elevation";
//import { Stickynavbar } from 'flowbite-react'

//const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
import React from "react";
//import Image from "next/image";
import Link from "next/link";
import Image from "next/image";
import MarsereumLogo from "assets/images/Marsereum-Logo.png";
import { ConnectWallet } from "../Web3Modal/WalletConnect";
import { Dropdown } from "flowbite-react";
export default function HeaderComponent() {
  //    backgroundImage: `url(${backgroundimage})`,

  return (
    <div>
      <nav className="bg-black px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-nowrap justify-left items-center mx-auto">
          <div></div>
          <div className="md:order-2">
          </div>
          <div className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-500 hover:to-red-700 rounded-lg sm:visible md:hidden">
            <Dropdown color={"rgb(0.30,0.65,1.00)"} label="Navigation">
              <Dropdown.Header>
                <span className="block text-sm">Navigation</span>
              </Dropdown.Header>
              <Dropdown.Item>
                <a href="">
                  <p className="cursor-pointer block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                    Website{" "}
                  </p>
                </a>
              </Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown>
          </div>
          <div className="" id="navbar-sticky">
            <ul className="invisible md:visible flex flex-row text-xl mx-10 mt-5 justify-center bg-black rounded-lg">
              <li
                className={"flex flex-col text-left object-left justify-left"}
              >
                <p>
                  <Image
                    width={120}
                    height={30}
                    src={MarsereumLogo}
                    alt="asa"
                  ></Image>
                </p>
              </li>
              <p className={"mx-48"}></p>
              <div className={"flex flex-col"}>
                <li
                  style={{ fontFamily: "Expletus" }}
                  className="duration-300 mx-auto text-md hover:cursor-pointer text-white bg-gradient-to-r from-red-800 to-red-900 hover:from-red-500 hover:to-red-700 focus:ring-4 focus:ring-blue-300 mt-2 rounded-lg px-10 py-4 mr-2 mb-2"
                >
                  <a
                    href="https://odasea.com"
                  >
                  Website</a>
                </li>
                </div>
                <div className={'flex flex-col'}>
                <li>
            <ConnectWallet></ConnectWallet>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
