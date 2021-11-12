import Head from "next/head";
import { ChonkLogo, ChonkSleep } from "@components/graphics/index";
import {
  IconDiscord,
  IconFacebook,
  IconInstagram,
  IconReddit,
  IconTelegram,
  IconTwitter,
} from "@components/icons";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>CHONK Finance</title>
        <meta name="description" content="Earn BNB while being lazy." />
        <meta property="og:title" content="CHONK Finance" />
        <meta property="og:description" content="Earn BNB while being lazy." />
        <meta property="og:url" content="https://www.chonk.fi/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.chonk.fi/meta/social-img.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/meta/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/meta/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/meta/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/meta/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="h-full container mx-auto flex flex-col md:max-w-screen-xl">
        <header className="flex flex-row items-center space-x-4 p-6 xl:py-12">
          <div className="flex-initial w-20 h-20 p-0.5 rounded-full border border-white bg-black">
            <div className="aspect-w-1 aspect-h-1">
              <ChonkLogo />
            </div>
          </div>
          <h3 className="font-title text-2xl text-chonk-orange">CHONK.fi</h3>
        </header>
        <main
          className="flex-1 px-6 flex flex-col gap-6 justify-center
        md:flex-row md:items-center md:gap-12"
        >
          <div
            className="flex-initial order-2 text-center space-y-2
          md:flex-1 md:order-1 md:text-left md:space-y-4"
          >
            <h1
              className="font-title text-3xl text-white
            lg:text-5xl xl:text-6xl"
            >
              Chonk Finance
            </h1>
            <h2 className="font-default text-base text-gray-400 md:text-xl">
              Earn BNB while being lazy.
            </h2>
          </div>
          <div className="flex-initial order-1 md:flex-1">
            <ChonkSleep />
          </div>
        </main>
        <footer className="p-6 font-default text-center space-y-4 md:flex md:items-center md:space-x-10 md:space-y-0 xl:py-12">
          <span className="text-base text-white md:text-xl">Join us now!</span>
          <div className="flex flex-row justify-center space-x-6">
            <a
              href="https://discord.gg/Suky7uJyJ6"
              className="w-10 h-10 p-1 flex justify-center content-center"
            >
              <IconDiscord className="flex-1" />
            </a>
            <a
              href="https://twitter.com/ChonkFi"
              className="w-10 h-10 p-1 flex justify-center content-center"
            >
              <IconTwitter className="flex-1" />
            </a>
            <a
              href="https://reddit.com/r/ChonkFi"
              className="w-10 h-10 p-1 flex justify-center content-center"
            >
              <IconReddit className="flex-1" />
            </a>
            <a
              href="https://t.me/CHONKofficial"
              className="w-10 h-10 p-1 flex justify-center content-center"
            >
              <IconTelegram className="flex-1" />
            </a>
            <a
              href="https://facebook.com/officialCHONK"
              className="w-10 h-10 p-1 flex justify-center content-center"
            >
              <IconFacebook className="flex-1" />
            </a>
            <a
              href="https://instagram.com/chonk.fi"
              className="w-10 h-10 p-1 flex justify-center content-center"
            >
              <IconInstagram className="flex-1" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
