const FrontPageTop = () => {
  return (
    <>
      {/* Background image  */}
      <section className="bg-hero h-85vh w-full bg-no-repeat bg-cover">
        {/* Text */}
        <div className="absolute w-6/12 xsm:p-8 sm:p-12 md:p-20 lg:p-32 grow justify-left items-left text-left mx-auto left-0 h-auto flex flex-col text-slate-800">
          <p className="text-xl xxsm:text-sm xsm:text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-5xl">
            Hi! I'm
          </p>
          <h1 className="text-6xl xxsm:text-2xl xsm:text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl 3xl:text-9xl">
            Daniel <strong>Demonceau</strong>
          </h1>
          <div className="text-xl xxsm:text-sm xsm:text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-5xl">
            <p>
              The <strong>TechLead</strong> specialised in <strong>GIS</strong>
            </p>
          </div>
        </div>
        {/* DAN IEL trademark */}
        {/* <div>DAN</div>
        <div>IEL</div> */}
      </section>
    </>
  );
};

export default FrontPageTop;
