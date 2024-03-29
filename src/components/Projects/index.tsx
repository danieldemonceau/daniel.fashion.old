import Image from "next/image";
// import PostgresqlElephantLogo from "../Services/images/postgr.svg";
// import NodejsLogo from "../Services/images/Node.js_logo.svg";
import AltitudeSurveyingLogo from "./images/altitude-surveying.png";

import GithubCard from "./GithubCard";
import ChessComCard from "./ChessComCard";

const Projects = () => {
  const handleClick = () => {
    window.open("http://themagiscian.com/?s=postgresql", "_blank");
  };

  return (
    <>
      <section className="bg-white flex flex-col justify-center p-10 h-full min-h-[80%] max-h-[80%]">
        <h1 className="text-9xl font-black opacity-25 text-left">Projects</h1>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="w-5/12">themagiscian.com</div>
            <div className="w-7/12">Image</div>
          </div>
          <div className="flex flex-row">
            <div className="w-7/12">IMAGE</div>
            <div className="w-5/12">Fluffy Clouds Avenue</div>
          </div>
          <div className="flex flex-row">
            <div className="w-7/12">IMAGE</div>
            <div className="w-5/12">Cumulus Capital Management Website</div>
          </div>
          <div className="flex flex-row">
            <div className="w-5/12">Why go vegan</div>
            <div className="w-7/12">IMAGE</div>
          </div>
          <div className="flex flex-row justify-around py-10">
            <div className="1/12"></div>
            <div className="w-5/12 text-right">
              <a
                href={`https://altitude-surveying.be/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="object-contain"
                  src={AltitudeSurveyingLogo}
                  alt="Altitude Surveying logo"
                  height={`200`}
                  width={`360`}
                />
              </a>
            </div>
            <div className="w-5/12 my-auto">
              <h1>Altitude Surveying</h1>
              <p className="text-xl">
                Website for a Land Surveying Company specialized in Drone
                applications
              </p>
              <a
                href={`https://altitude-surveying.be/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://altitude-surveying.be/
              </a>
            </div>
            <div className="1/12"></div>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center text-center text-gray-200 h-full">
          <div className="flex flex-col bg-slate-600 justify-between w-3/12 p-5 h-full rounded-2xl">
            <GithubCard></GithubCard>
          </div>

          <div className="flex flex-col bg-slate-600 justify-between w-3/12 p-5 h-full rounded-2xl">
            Altitude Surveying
          </div>

          <div className="flex flex-col bg-slate-600 justify-between w-3/12 p-5 h-full rounded-2xl">
            <ChessComCard></ChessComCard>
          </div>
          <div className="flex flex-col bg-slate-600 justify-between w-3/12 p-5 h-full rounded-2xl">
            {/* <h1>Full-Stack Node.js Applications Consultancy</h1>
            <Image
              className="object-contain rounded-2xl shadow-md xs:absolute md:mx-auto md:left-0 md:right-0"
              // src={`/images/Postgresql_elephant.svg`}
              src={NodejsLogo}
              alt="Node.js logo"
              width={`96`}
              height={`96`}
            /> */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
              onClick={handleClick}
            >
              Sample Work
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
