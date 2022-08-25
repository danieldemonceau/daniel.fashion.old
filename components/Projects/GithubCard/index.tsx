/* eslint no-undef: 0 */
// import widgetStyle from "./style";
import nFormatter from "./format";
import Image from "next/image";
import { useState, useEffect } from "react";
import Avatar from "./Avatar";

const GithubCard = () => {
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    fetchUserData();
  }, []);

  /** Fetch the data */
  const fetchUserData = async () => {
    const data = await fetch(`https://api.github.com/users/danieldemonceau`, {
      method: "GET",
    });
    const userData = await data.json();
    setUserData(userData);
    return userData;
  };
  return (
    <>
      {userData ? (
        <a
          href={`https://github.com/${userData.login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200"
        >
          <div className="relative rounded-lg shadow-md text-center m-[5px] p-[15px] bg-slate-900 inline-block">
            <div className="absolute right-0 mr-2">
              <Image
                className="object-contain rounded-full"
                src={`https://i.ibb.co/frv5pB3/github-logo.png`}
                alt="github logo"
                width={`50`}
                height={`50`}
              />
            </div>
            <div className="card-header">
              <Avatar userName={userData.login} />
              <div className="text-slate-200">
                <a
                  href={`${userData.html_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="text-2xl">{`@${userData.login}`}</p>{" "}
                </a>
              </div>
              <p className="m-auto max-w-[250px] text-slate-200 text-sm">{`${
                userData.bio ?? ""
              }`}</p>
              <div className="mt-[10px]">
                <div className="flex relative mx-auto my-0 justify-around rounded-md p-[10px] shadow-inner shadow-slate-600">
                  <div className="relative text-slate-200">
                    <div className="text-lg font-mono">{`${nFormatter(
                      userData.followers
                    )}`}</div>
                    <div className="text-sm font-bold">Followers</div>
                  </div>
                  <div className="relative text-slate-200">
                    <div className="text-lg font-mono">{`${nFormatter(
                      userData.following
                    )}`}</div>
                    <div className="text-sm font-bold">Following</div>
                  </div>
                  <div className="relative text-slate-200">
                    <div className="text-font-monoas']">
                      {`${nFormatter(userData.public_repos)}`}
                    </div>
                    <div className="text-sm font-bold">Repositories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ) : (
        ""
      )}
    </>
  );
};

export default GithubCard;
