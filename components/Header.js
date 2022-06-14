/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Link from 'next/link'
import Drawer from 'react-modern-drawer'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <>
      <div className="grotesk mt-0 mb-2 flex items-center justify-between py-4 px-4 sm:mx-0 sm:mb-20 sm:px-0 md:px-6">
        <div className="mt-4 inline-block pb-4 pl-8">
          <Link href="/">
            <a href="/" className="align-middle text-3xl font-bold text-black">
              {`{ EMEKA AGU }`}
            </a>
          </Link>


        </div>
        <div className="flex items-center">
          <div className="hidden py-1 text-right xl:inline-block">
            <Link href="/about">
              <a className="pr-12 text-lg text-black">
                About me
              </a>
            </Link>
            <Link href="/projects">
              <a className=" text-lg text-black">
                Projects
              </a>
            </Link>



            <a
              className="mt-2 inline-flex items-center px-12 py-3 text-lg  tracking-tighter text-black"
              href="https://github.com/emexx2002/project-images/raw/main/Main%2BResume.pdf"
            >
              My resume
            </a>
            <a
              className="bg-blue mt-2 inline-flex items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
              href="/"
            >
              Hire Me
            </a>
          </div>
          <button onClick={toggleDrawer} className="pr-12 pl-4">
            <svg
              className="mr-auto inline-block text-black xl:hidden"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='xl:hidden bla bla bla'
            size={300}
          >
            <div className="py-4 px-5 text-left block justify-center mt-12">
              <Link href="/about">
                <a className="block mt-5 text-lg text-black">
                  About me
                </a>
              </Link>
              <Link href="/projects">
                <a className="block mt-5 text-lg text-black">
                  Projects
                </a>
              </Link>
              <a
                className="text-lg mt-5 block text-black"
                href="https://github.com/emexx2002/project-images/raw/main/Main%2BResume.pdf"
              >
                My resume
              </a>
              <a
                className="bg-blue block mt-8 items-center px-8 py-3 text-lg font-semibold tracking-tighter text-white"
                href="/"
              >
                Hire Me
              </a>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}
