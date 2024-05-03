const Banner = () => {
  return (
    <div className=" max-w-[1440px] mx-auto mt-[90px]">
      <div
        className="hero min-h-screen relative flex justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://i.ibb.co/xqMHCCT/Banner-Image.png)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div>
            <p className=" text-[#F9FAFB] text-base font-medium">
              Seamlessly connecting you to the heartbeat of India's prime
              properties.
            </p>
            <h1 className="py-8 text-6xl font-bold text-[#FFF]">
              Your Portal to India's <br /> Exquisite Real Estate
            </h1>
            <button className="flex items-center gap-2 justify-center py-3 px-6 bg-[#0059b1] hover:bg-[#2577c8] rounded mx-auto text-[#FFFFFF]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 ml-1 opacity-70 text-[#FFFFFF]"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Find Property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
