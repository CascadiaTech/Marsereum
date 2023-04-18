import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/Header/HeaderComponent";
import "tailwindcss-elevation";
import FooterComponent from "../components/Footer/FooterComponent";
import DualCardComponent from "../components/DualCards/DualCardComponent";
import ScrollpositionAnimation from "../hooks/OnScroll";
import { useEffect, useState } from "react";
import "@uniswap/widgets/fonts.css";
import { useWeb3React } from "@web3-react/core";
import Marsereum from "assets/images/Marsereum.png";

import { SwapWidget, darkTheme, lightTheme, Theme } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import ClaimComponent from "../components/Claim/ClaimComponent";
const Home: NextPage = () => {
  const { account, chainId, active } = useWeb3React();
  const showConnectAWallet = Boolean(!account);
  const context = useWeb3React();
  const { library } = context;
  const [uniswaprovider, setuniswapprivder] = useState();
  const Runeaddress = "0xc68a4c68f17fed266a5e39e7140650acadfe78f8";

  useEffect(() => {
    async function setProvider() {
      if (account) {
        const provider = new Web3Provider(
          library?.provider as ExternalProvider | JsonRpcFetchFunc
        );
        return provider;
      } else {
        return;
      }
    }

    async function ScrollpositionAnimation() {
      const targets = document.querySelectorAll(".js-show-on-scroll");
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          // Is the element in the viewport?
          if (entry.isIntersecting) {
            // Add the fadeIn class:
            entry.target.classList.add("motion-safe:animate-fadeIn");
          } else {
            // Otherwise remove the fadein class
            entry.target.classList.remove("motion-safe:animate-fadeIn");
          }
        });
      });
      // Loop through each of the target
      targets.forEach(function (target) {
        // Hide the element
        target.classList.add("opacity-0");

        // Add the element to the watcher
        observer.observe(target);
      });
      ScrollpositionAnimation();
    }
    setProvider().then((result) => setuniswapprivder(result as any));
  }, [account]);

  const jsonRpcUrlMap = {
    1: ["https://mainnet.infura.io/v3/fc5d70bd4f49467289b3babe3d8edd97"],
    3: ["https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>"],
  };

  return (
    <>
      <main className={styles.main}>
        <div
          style={{
            background:
              "radial-gradient(ellipse at center, #540404 0%, #000000 63%, #000000 100%)",
          }}
          className={"z-0 absolute min-w-full h-full -translate-y-full"}
        ></div>
        <header>
          {" "}
          <HeaderComponent></HeaderComponent>
        </header>
        <div className={"z-10 relative"}>
          <p
            style={{ fontFamily: "space-age" }}
            className="mt-12 text-3xl sm:text-4xl text-center text-gray-100 md:text-4xl lg:text-5xl"
          >
            Dapp Marsereum
          </p>
          <p className={"my-12"}></p>

          <div className={"flex flex-col self-center"}>
            <div
              style={{
                background:
                  "linear-gradient(135deg, #3F1B1B 0%, #3F1B1B 50%, #100909 100%)",
              }}
              className={
                "rounded-xl justify-center text-center w-fit h-fit py-20 px-6 mx-10 sm:px-10 md:w-auto md:px-10"
              }
            >
              <h5
                style={{ fontFamily: "Inter-Regular-400", color: "#616d7e" }}
                className="text-center text-2xl dark:text-white"
              >
                Your voice has a say <br /> Start by casting your votes <br />{" "}
                Making new proposals <br /> and engaging in the community
              </h5>
            </div>
          </div>
          <div className={"flex flex-col justify-center"}>
            <div className={"flex flex-row justify-center my-6"}>
              <button
                onClick={() =>
                  window.open(
                    "https://www.tally.xyz/gov/eip155:5:0x430786107C4Db7b87e399b75Bd9eA0740643037B"
                  )
                }
                style={{
                  background:
                    "linear-gradient(135deg, #3F1B1B 0%, #3F1B1B 50%, #100909 100%)",
                  fontFamily: "Inter-Regular-400",
                }}
                className="duration-300 mx-4 font-light hover:cursor-pointer bg-gradient-to-r from-red-800 to-red-900 hover:from-red-500 hover:to-red-700 focus:ring-4 focus:ring-blue-300 mt-2 rounded-xl px-6 py-2 md:px-10 md:py-4 mr-2 mb-2"
              >
                Open DAO
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://opensea.io/collection/officialwelcomebacktrump"
                  )
                }
                style={{
                  background:
                    "linear-gradient(135deg, #3F1B1B 0%, #3F1B1B 50%, #100909 100%)",
                  fontFamily: "Inter-Regular-400",
                }}
                className="duration-300 mx-4 font-light hover:cursor-pointer bg-gradient-to-r from-red-800 to-red-900 hover:from-red-500 hover:to-red-700 focus:ring-4 focus:ring-blue-300 mt-2 rounded-xl px-6 py-2 md:px-10 md:py-4 mr-2 mb-2"
              >
                {" "}
                Vote
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.tally.xyz/gov/eip155:5:0x430786107C4Db7b87e399b75Bd9eA0740643037B/proposal/create?utm_source=daopage&utm_medium=Marsereum%20governor2"
                  )
                }
                style={{
                  background:
                    "linear-gradient(135deg, #3F1B1B 0%, #3F1B1B 50%, #100909 100%)",
                  fontFamily: "Inter-Regular-400",
                }}
                className="duration-300 mx-4 font-light hover:cursor-pointer bg-gradient-to-r from-red-800 to-red-900 hover:from-red-500 hover:to-red-700 focus:ring-4 focus:ring-blue-300 mt-2 rounded-xl px-6 py-2 md:px-10 md:py-4 mr-2 mb-2"
              >
                Proposals
              </button>
            </div>
          </div>

          <p className={"my-4"}></p>

          <div
            className={
              "flex flex-col mx-auto justify-center self-center px-6 text-center mt-10 mb-10 md:mt-0 md:mb-0"
            }
          >
            <div className="">
              {uniswaprovider ? (
                <>
                  <div className={"w-100% h-120%"}>
                    <div
                      className={
                        "flex flex-col content-center text-center justify-center"
                      }
                    >
                      <h5
                        style={{
                          fontFamily: "Inter-Regular-400",
                          color: "#616d7e",
                        }}
                        className="text-center my-6 text-2xl sm:text-2xl md:text-3xl mx-6 dark:text-white"
                      >
                        Purchase Marsereum here to become a member within <br />
                        The Marsereum Decentralized Autonomous Organization
                      </h5>
                      <div className="Uniswap mx-auto px-6 sm:px-6 md:px-12 lg:px-24">
                        <SwapWidget
                          theme={darkTheme}
                          width={"100%"}
                          jsonRpcUrlMap={jsonRpcUrlMap}
                          provider={uniswaprovider}
                          defaultOutputTokenAddress={Runeaddress}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={"flex flex col justify-center"}>
                    <div
                      style={{
                        background:
                          "linear-gradient(135deg, #3F1B1B 0%, #3F1B1B 50%, #100909 100%)",
                      }}
                      className={
                        "rounded-xl justify-center text-center w-1/2 h-fit py-10 px-6 mx-10 sm:px-10 md:px-10"
                      }
                    >
                      <p
                        className="text-center text-2xl sm:text-2xl md:text-3xl"
                        style={{
                          fontFamily: "Inter-Regular-400",
                          color: "#616d7e",
                        }}
                      >
                        Please connect wallet to purchase
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <ClaimComponent></ClaimComponent>
      </main>
      <FooterComponent></FooterComponent>
    </>
  );
};

export default Home;

//style={{ background: 'linear-gradient(135deg, #E10000 0%, #AE0000 50%, #730707 100%)' }}
