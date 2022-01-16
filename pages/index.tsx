import { NextSeo } from "next-seo";
import meta from "../data/meta";

const landing = () => {
  return (
    <>
      <NextSeo title="Home" description={`Homepage of ${meta.domainName}`} />
      <div className="grow justify-center items-center text-center text-gray-200">
        <h1 className="text-6xl xxsm:text-3xl xsm:text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl 3xl:text-9xl">
          daniel.<strong>demonceau</strong>
        </h1>
        <p className="text-xl xxsm:text-sm xsm:text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-5xl">
          Software <strong>developer</strong>
        </p>
      </div>
    </>
  );
};

export default landing;
