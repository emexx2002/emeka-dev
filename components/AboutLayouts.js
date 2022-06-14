/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';
import Card from './Card'


const projects = [
  { title: "Munche.service", image: "https://raw.githubusercontent.com/emexx2002/project-images/main/munche-preview.svg", link: "https://munche.services", category: "react" },
  { title: "Loopy Studio", image: "https://raw.githubusercontent.com/emexx2002/project-images/main/loopy.png", link: "http://loopstudio-pi.vercel.app/", category: "htmlAndCss" },
  { title: "Task Site", image: "https://raw.githubusercontent.com/emexx2002/project-images/main/task%20site.png", link: "https://task-site2.vercel.app/", category: "htmlAndCss" },
  { title: "Super Cell landing page", image: "https://raw.githubusercontent.com/emexx2002/project-images/main/download.png", link: "https://supercell-meta.vercel.app/", category: "htmlAndCss" },
  { title: "Open Sea clone", image: "https://raw.githubusercontent.com/emexx2002/project-images/main/opensea.png", link: "https://opensea-clone-emexx2002.vercel.app/", category: "blockchain, react" },
  { title: "Loopy Studio", image: "https://raw.githubusercontent.com/emexx2002/project-images/main/shorter.png", link: "https://short-er.vercel.app/", category: "react" },
  // { title: "Loopy Studio", image: "https://raw.githubusercontent.com/emexx2002/project-images/main/loopy.png", link: "http://loopstudio-pi.vercel.app/", category: "htmlAndCss" },
  // { title: "Loopy Studio", image: "https://raw.githubusercontent.com/emexx2002/project-images/main/loopy.png", link: "http://loopstudio-pi.vercel.app/", category: "htmlAndCss" },

]

export default function Main() {
  const [active, setActive] = useState("all")
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black px-8">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-0">
          <div className="lg:w-3/6">
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
              About Me
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
              A Computer science undergraduate and Web developer currently studying at the university of Nigeria Nsukka with
              specialty in Software development , design and Blockchain development .
              <br />
              <br />
              I find the most passion in web designing. I have two years working experience. I am fully proficient in
              HTML, CSS, JAVASCRIPT, REACTJS, BOOTSTRAP, MUI, SOLIDITY, WEB3JS, TAILWIND CSS
            </p>
            <br />
            <h3 className="text-xl"><span className="font-bold">Skills: </span>Programming, BlockChain developement, Team work and Problem solving skills</h3>
          </div>
          <div className="mb-20 mt-0 hidden w-full flex-col lg:mt-0 lg:inline-block lg:w-3/6">
            <img src="/images/about.svg" alt="Hero" style={{ width: "80%", display: "block", margin: "0 auto" }} />
          </div>
          <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <img src="/images/about.svg" alt="image" />
          </div>
        </div>
        <div className="mt-0 bg-white">
          <div className="mx-auto">
            <div className="mx-auto px-5 py-12 lg:px-24">
              <div className="my-5 flex w-full flex-col text-center">
                <h2 className="text-2xl mb-2 font-bold text-black lg:text-3xl">
                  Companies I Have Worked With
                </h2>
              </div>
              <div
                className="
                flex
                gap-16
                justify-center
                flex-wrap
                text-center
                lg:grid-cols-3"
              >
                <div className="items-center justify-center lg:inline-block">
                  <img
                    src="/images/esl.png"
                    alt="Segment"
                    className="block  m-auto h-[50px] object-contain"
                  />
                </div>
                <div className=" items-center justify-center lg:inline-block">
                  <img
                    src="/images/paycenter.svg"
                    alt="Segment"
                    className="block m-auto h-[50px] object-contain"
                  />
                </div>
                <div className=" items-center justify-center lg:inline-block">
                  <img
                    src="/images/munche.png"
                    alt="Segment"
                    className="block h-[50px] m-auto object-contain"
                  />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
