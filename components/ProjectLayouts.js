/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';
import Card from './Card'

export default function Main() {
  const [active, setActive] = useState("all")
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black px-8">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-0">
          <div className="lg:w-3/6">
            <h3 className="text-md lg:text-[2.0em] text-black">Take a look at my</h3>
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
              Projects
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
              Built with HTML, CSS, JavaScript, React, Next.js, Web3.Js
            </p>
          </div>
          <div className="mb-20 mt-0 hidden w-full flex-col lg:mt-0 lg:inline-block lg:w-3/6">
            <img src="/images/projects.svg" alt="Hero" style={{ width: "80%", display: "block", margin: "0 auto" }} />
          </div>
          <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <img src="/images/projects.svg" alt="image" />
          </div>
        </div>
        <div className="container py-8 m-auto">
          <div className="flex justify-center items-center m-auto">
            <button className={`rounded border-2 mx-4 ${active === "all" ? "bg-blue-400 border-blue-400 text-white" : "border-blue-400 text-black"}  px-8 py-2`}>All</button>
            <button className="rounded border-2 mx-4 border-blue-400 text-black px-8 py-2">React.js</button>
            <button className="rounded border-2 mx-4 border-blue-400 text-black px-8 py-2">Blockchain</button>
            <button className="rounded border-2 mx-4 border-blue-400 text-black px-8 py-2">HTML & CSS</button>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap justify-center items-center px-8 py-12">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>


        </div>
        {/* <div className="mt-0 bg-white lg:mt-40">
          <div className="mx-auto">
            <div className="mx-auto px-5 py-24 lg:px-24">
              <div className="my-10 flex w-full flex-col text-center">
                <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                  Companies I Have Worked With
                </h2>
              </div>
              <div
                className="
                grid grid-cols-3
                gap-16
                text-center
                lg:grid-cols-3"
              >
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/esl.png"
                    alt="Segment"
                    className="block  m-auto h-[50px] object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/paycenter.svg"
                    alt="Segment"
                    className="block m-auto h-[50px] object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/munche.png"
                    alt="Segment"
                    className="block h-[50px] m-auto object-contain"
                  />
                </div>

              </div>

            </div>
          </div> 
        </div>*/}
      </section>
    </div>
  );
}
