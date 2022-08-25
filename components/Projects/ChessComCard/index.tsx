import { useEffect, useState } from "react";
import Image from "next/image";

const ChessWebAPI = require("chess-web-api");
const chessAPI = new ChessWebAPI();
const flagUrl =
  "https://www.chess.com/bundles/web/images/sprites/flags-v3.0af3e349@2x.png";
const flagUrlCss = "background-size: 51.2rem 51.2rem";
import GithubCard from "../GithubCard/Avatar";

const ChessComCard = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [blitzBest, setBlitzBest] = useState(0);
  const [dailyBest, setDailyBest] = useState(0);
  const [tacticsBest, setTacticsBest] = useState(0);
  const username = "danieldemonceau";

  const getPlayerStats = async (username: string) => {
    const getPlayerResponse = await chessAPI.getPlayer(username);
    setUrl(getPlayerResponse.body.url);
    setName(getPlayerResponse.body.name);
    setAvatar(getPlayerResponse.body.avatar);
    setStatus(getPlayerResponse.body.status);
    setLocation(getPlayerResponse.body.location);
    const response = await chessAPI.getPlayerStats(username);
    setBlitzBest(parseInt(response.body.chess_blitz.best.rating));
    setDailyBest(parseInt(response.body.chess_daily.best.rating));
    setTacticsBest(parseInt(response.body.tactics.highest.rating));
  };

  useEffect(() => {
    try {
      getPlayerStats(username);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      {/* <Image
        src="https://i.imgur.com/gf3TZMr.jpeg"
        alt="Some alt text"
        width={50}
        height={50}
      />
      {avatar && (
        <Image
        className="object-contain"
        src={`${avatar}`}
        alt="chessCom logo"
        width={`50`}
        height={`50`}
        />
      )} */}
      <div className="flex-column bg-amber-900 m-[1px] p-[4px] rounded-lg shadow-md">
        <a
          href={`${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200"
        >
          <div className="float-left my-auto">
            <GithubCard userName="danieldemonceau" />
          </div>
          <div className="my-auto mx-auto">
            <h1 className="text-xl">{name}</h1>
            {/* <div>Status: {status}</div>
            <div>Location: {location}</div> */}
            <div className="flex flex-column justify-between content-between rounded-md px-3">
              <div>
                <div>{blitzBest}</div>
                <div className="text-sm">Blitz</div>
              </div>
              <div>
                <div>{dailyBest}</div>
                <div className="text-sm">Daily</div>
              </div>
              <div>
                <div>{tacticsBest}</div>
                <div className="text-sm">Tactics</div>
              </div>
            </div>
            <div className="float-right text-xs mb-0 bottom-0 mt-3 italic">
              chess.com
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default ChessComCard;
