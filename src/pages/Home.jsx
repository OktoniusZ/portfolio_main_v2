const Home = () => {
  return (
    <>
      <section className="relative flex flex-wrap items-center justify-between mx-auto px-[5%] max-w-[1600px] h-screen z-10">
        <div className="flex flex-col items-start text-gray-200 z-10 max-w-[600px]">
          <h1 className="text-[clamp(36px,5vw,64px)] font-black mb-5 font-roboto bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent">
            Hello, I'm
            <ol className="list-none h-20 leading-[5rem] overflow-hidden flex flex-col items-start">
              <li className="animate-slide">
                <span className="font-semibold bg-gradient-to-r from-cyan-500 to-magenta-500 bg-clip-text text-transparent inline-block border-r-4 border-white whitespace-nowrap animate-typing">
                  Oktonius Zevanya Simanungkalit
                </span>
              </li>
              <li className="animate-slide">
                <span className="font-semibold bg-gradient-to-r from-cyan-500 to-magenta-500 bg-clip-text text-transparent inline-block border-r-4 border-white whitespace-nowrap animate-typing">
                  Web Developer
                </span>
              </li>
              <li className="animate-slide">
                <span className="font-semibold bg-gradient-to-r from-cyan-500 to-magenta-500 bg-clip-text text-transparent inline-block border-r-4 border-white whitespace-nowrap animate-typing">
                  Cloud Enthusiast
                </span>
              </li>
            </ol>
          </h1>
          <p className="text-[clamp(18px,2vw,30px)] font-roboto mb-8 max-w-[90%]">
            Full-stack developer skilled in ReactJS & Laravel, currently
            exploring Google Cloud Platform!
          </p>
          <a
            href="mailto:oktoniuszevanya.com"
            className="bg-orange-400 text-gray-200 rounded-full text-[clamp(18px,2vw,24px)] font-semibold px-6 py-3 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Contact Me
          </a>
        </div>

        {/* Blurred Background Effects */}
        <div className="absolute w-[50vw] h-[50vw] min-w-[350px] rounded-full blur-[100px] top-[-128px] left-[-10vw] bg-[rgba(72,61,139,0.7)] z-0"></div>
        <div className="absolute w-[50vw] h-[50vw] min-w-[350px] rounded-full blur-[100px] top-[246px] right-[-25vw] bg-[rgba(139,0,139,0.7)] z-0"></div>
      </section>
    </>
  );
};

export default Home;
