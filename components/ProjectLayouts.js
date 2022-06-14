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
  const [filter, setFilter] = useState("")

  const handleFilter = (terms) => {

    setFilter(terms == "all" ? "" : terms)
    setActive(terms)



  }

  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black px-2 md:px-8">
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
          <div className="flex w-full justify-center items-center m-auto flex-wrap ">
            <button onClick={() => { handleFilter("all") }} className={`rounded border-2 mx-4 ${active === "all" ? "bg-blue-400 border-blue-400 text-white" : "border-blue-400 text-black"}  px-8 py-2 my-3`}>All</button>
            <button onClick={() => { handleFilter("react") }} className={`rounded border-2 mx-4 ${active === "react" ? "bg-blue-400 border-blue-400 text-white" : "border-blue-400 text-black"}  px-8 py-2 my-3`}>React.js</button>
            <button onClick={() => { handleFilter("blockchain") }} className={`rounded border-2 mx-4 ${active === "blockchain" ? "bg-blue-400 border-blue-400 text-white" : "border-blue-400 text-black"}  px-8 py-2 my-3`}>Blockchain</button>
            <button onClick={() => { handleFilter("html") }} className={`rounded border-2 mx-4 ${active === "html" ? "bg-blue-400 border-blue-400 text-white" : "border-blue-400 text-black"}  px-8 py-2 flex my-3`}>HTML & CSS</button>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap justify-center items-center px-2 py-4 md:px-8 py-12">
              {projects.filter(item => item.category.toLowerCase().includes(filter)).map((project, index) =>
                <Card key={index} image={project.image} link={project.link} title={project.title} />
              )}

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
