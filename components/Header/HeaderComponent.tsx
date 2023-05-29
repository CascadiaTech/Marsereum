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
      <nav className="bg-transparent px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-nowrap justify-left items-center mx-auto">
          <div className="md:order-2 visible md:invisible">
          <ConnectWallet></ConnectWallet>
          </div>
          <div className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-500 hover:to-red-700 rounded-lg sm:visible md:hidden">
            <Dropdown color={"rgb(0.30,0.65,1.00)"} label="Navigation">
              <Dropdown.Header>
                <span className="block text-sm">Navigation</span>
              </Dropdown.Header>
              <Dropdown.Item>
                <a href="https://preview.webflow.com/preview/marsereum?utm_medium=preview_link&utm_source=dashboard&utm_content=marsereum&preview=59f5b90e71b35e9aafa792f461ab70af&pageId=634ed847fc477aff074f9b50&workflow=preview">
                  <p className="cursor-pointer block py-2 pr-4 pl-3 text-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
                    Website{" "}
                  </p>
                </a>
              </Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown>
          </div>
          <div className="" id="navbar-sticky">
            <ul className="invisible md:visible flex flex-row text-xl mx-10 mt-5 justify-center rounded-lg">
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
              <p className={""}></p>
              <div className={"justify-center text-center mx-auto translate-x-20"}>
                <div className={'flex flex-row'}>
                <li
                  
                style={{
                  background:
                  "linear-gradient(135deg, #3F1B1B 0%, #3F1B1B 50%, #100909 100%)", fontFamily: "Inter-Regular-400",
                }}
                  className="duration-300 w-40 text-center text-md hover:cursor-pointer text-white hover:from-red-500 hover:to-red-700 focus:ring-4 focus:ring-blue-300 mt-2 rounded-lg px-4 py-3 mr-2 mb-2"
                >
                  <a
                    href="https://www.marsereum.org/"
                  >
                  Website</a>
                </li>
                <li>
            <ConnectWallet></ConnectWallet>
                </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
