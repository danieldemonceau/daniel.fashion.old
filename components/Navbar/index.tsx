import Link from "next/link";
import HorizontalBar from "./HorizontalBar";
import { CSSTransition, Transition } from "react-transition-group";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);

  const scrollFunction = () => {
    if (isScrolled && window.scrollY < 80) {
      setIsScrolled(false);
    } else if (!isScrolled && window.scrollY > 120) {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    console.log("window.scrollY", window.scrollY);
  });

  useEffect(() => {
    setTimeout(async () => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <>
      {show && (
        <CSSTransition
          in={true}
          appear={true}
          enter={true}
          exit={true}
          timeout={1000}
          classNames="qwert"
          unmountOnExit
        >
          <nav className={`text-black bg-white pt-4 pb-2`}>
            <div className={`text-black bg-white`}>
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
          </nav>
        </CSSTransition>
      )}
    </>
  );
};

export default Nav;
