import Link from "next/link";
import HorizontalBar from "./HorizontalBar";
import { CSSTransition, Transition } from "react-transition-group";

const Nav = () => {
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        enter={true}
        exit={true}
        timeout={1000}
        classNames="navbar-fade"
        unmountOnExit
      >
        <div className="absolute pt-6 left-0 right-0 m-auto">
          <HorizontalBar />
          <div className="flex justify-center items-center">
            <nav className="text-slate-800 h-auto">
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
    </>
  );
};

export default Nav;
