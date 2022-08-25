const About = () => {
  return (
    <>
      <section className="bg-slate-50 flex flex-row justify-center text-left p-10">
        <div className="w-5/12 text-slate-700 m-auto">
          <h1 className="-ml-20 text-9xl absolute font-black opacity-25">
            About<strong>Me</strong>
          </h1>
          <div className="mt-20 ml-5 mr-10 mb-10">
            <p>
              I am a passionate Full-Stack Developer and blogger with a strong
              background in GIS
            </p>
            <p>
              I have worked in various industries and created several
              side-projects
            </p>
            <p>
              I have found a work-life balance and I am a happy person who
              enjoys following his passion, travelling, working out, and playing
              chess
            </p>
            <p>
              Delivering High Quality is my #1 priority and I am excited for the
              next Challenge!
            </p>
          </div>
        </div>
        <div className="w-5/12 m-auto text-center">
          <q>
            {`"If your dreams don't scare you, they are not big enough" - Ellen
            Johnson Sirleaf`}
          </q>
        </div>
      </section>
    </>
  );
};

export default About;
