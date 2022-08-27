import Link from "next/link";
import HorizontalBar from "./HorizontalBar";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";

const Nav = () => {
  const [scrollYValue, setScrollYValue] = useState(0);
  const [show, setShow] = useState(false);

  const scrollFunction = () => {
    console.log(window.scrollY);
    setScrollYValue(() => window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
  });

  useEffect(() => {
    setTimeout(async () => {
      setShow(true);
    }, 1);
  }, []);

  return (
    <>
      <nav
        className={`left-0 right-0 fixed z-10 ${
          scrollYValue > 300
            ? "bg-white/100"
            : // : scrollYValue > 250
            // ? 90
            // : scrollYValue > 200
            // ? 70
            scrollYValue > 150
            ? "bg-white/50"
            : // : scrollYValue > 100
              // ? 30
              // : scrollYValue > 50
              // ? 10
              // scrollYValue > 0
              // ?
              "bg-white/0"
          // : "bg-white/0"
        }
         text-black pt-2 pb-1`}
      >
        {show && (
          <CSSTransition
            in={true}
            appear={true}
            enter={true}
            exit={true}
            timeout={1000}
            classNames="navbar"
            unmountOnExit
          >
            <div className={`text-black`}>
              <h1
                className={`text-center font-anima tracking-widest -mb-2 ${
                  scrollYValue > 300
                    ? "opacity-100"
                    : scrollYValue > 150
                    ? "opacity-50"
                    : "opacity-0"
                }`}
              >
                DANIEL DEMONCEAU
              </h1>
              <HorizontalBar />
              <div className="flex justify-center items-center">
                <nav className="text-slate-800 h-auto ">
                  <ul className="flex flex-row space-x-12">
                    <li className="hover:text-slate-600">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="hover:text-slate-600">
                      <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li className="hover:text-slate-600">
                      <Link href="/services">Services</Link>
                    </li>
                    {/* <li className="hover:text-slate-600">
              <Link href="/projects">Projects</Link>
            </li> */}
                    <li className="hover:text-slate-600">
                      <Link href="/resume">Resume</Link>
                    </li>
                    <li className="hover:text-slate-600">
                      <Link href="/about">About</Link>
                    </li>
                    <li className="hover:text-slate-600">
                      <Link href="/gallery">Gallery</Link>
                    </li>
                    <li className="hover:text-slate-600">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <hr />
              </div>
              <HorizontalBar />
            </div>
          </CSSTransition>
        )}
      </nav>
    </>
  );
};

export default Nav;
