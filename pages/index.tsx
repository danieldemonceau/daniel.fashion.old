const landing = () => {
  return (
    <>
      <div className="text-left h-1/2 flex flex-col justify-center text-gray-200">
        <h1 className="text-6xl xxsm:text-3xl xsm:text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl 3xl:text-9xl">
          daniel.<strong>fashion</strong>
        </h1>
        <p className="text-xl xxsm:text-sm xsm:text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-5xl">
          When personal branding has to be <strong>fashion</strong>
        </p>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   // This is where the error occurs
//   const { slug } = context.params; // Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'
//   const props = fetch(`/api/${slug}`);
//   return { props };
// };

export default landing;
