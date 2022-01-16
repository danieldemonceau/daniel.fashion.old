import Link from "next/link";
import HorizontalBar from "./HorizontalBar";

const Nav = () => {
  return (
    <>
      <HorizontalBar />
      <div className="flex justify-center items-center">
        <nav className="text-slate-50 h-auto">
          <ul className="flex flex-row space-x-12">
            <li className="hover:text-slate-600">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-slate-600">
              <Link href="/cv">CV</Link>
            </li>
            <li className="hover:text-slate-600">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-slate-600">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-slate-600">
              <Link href="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      <HorizontalBar />
    </>
  );
};

export default Nav;
