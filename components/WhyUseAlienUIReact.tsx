import React from "react";
import { MdInstallDesktop } from "react-icons/md";
import { FcDataConfiguration } from "react-icons/fc";
import { BiCustomize } from "react-icons/bi";
import { MdJoinInner } from "react-icons/md";

function WhyUseAlienUIReact() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl text-center mb-2">
          Why Use AlienUI React?
        </h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-black rounded-md p-6 shadow hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <MdInstallDesktop className="w-14 h-14 pb-4 text-white" />
            <h3 className="text-lg font-bold text-white">
              No npm Installation
            </h3>
            <p className="text-white mt-2">
              Requires no NPM installations. Simply copy, paste them into your
              React project seamlessly.
            </p>
          </div>

          <div className="flex flex-col items-center bg-black rounded-md p-6 shadow hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <FcDataConfiguration className="w-14 h-14 pb-4 text-white" />
            <h3 className="text-lg font-bold text-white">No Configuration</h3>
            <p className="text-white mt-2">
              Works with zero configuration as it uses in-built native tags, so
              you can focus on building your app instantly.{" "}
            </p>
          </div>

          <div className="flex flex-col items-center bg-black rounded-md p-6 shadow- hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <BiCustomize className="w-14 h-14 pb-4 text-white" />
            <h3 className="text-lg font-bold text-white">Easy Customization</h3>
            <p className="text-white mt-2">
              Easily customize components with Tailwind CSS class utilities to
              match your web app&apos;s design.
            </p>
          </div>

          <div className="flex flex-col items-center bg-black rounded-md p-6 shadow hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <MdJoinInner className="w-14 h-14 pb-4 text-white" />
            <h3 className="text-lg font-bold text-white">
              Open-Source Contributions
            </h3>
            <p className="text-white mt-2">
              Open-source, developers and designers can collaborate and share UI
              components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUseAlienUIReact;
