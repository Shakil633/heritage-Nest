import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

const Buy = () => {
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  //
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef3 = useRef(null);
  //
  const goToNext1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slideNext();
    }
  };

  const goToPrev1 = () => {
    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slidePrev();
    }
  };

  const goToNext2 = () => {
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.slideNext();
    }
  };

  const goToPrev2 = () => {
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.slidePrev();
    }
  };

  //
  const [activeLink, setActiveLink] = useState("Buy");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className=" mt-[90px]">
      {/* banner section */}
      <div>
        <div className="relative">
          <img
            className="w-[1440px] h-[309px] mx-auto"
            src="https://i.ibb.co/2gNxjK7/Frame-108.jpg"
            alt=""
          />
        </div>

        <div
          className="w-[984px] p-8 h-[376px] mx-auto bg-[#FFF] rounded-lg absolute left-0 right-0 top-0 mt-[180px] shadow"
          style={{ boxShadow: "0px 8px 96px 0px rgba(0, 0, 0, 0.12)" }}
        >
          <div className="flex items-center dark:bg-gray-100 dark:text-gray-800 border-b border-[#d0d8e1]">
            <a
              rel="noopener noreferrer"
              href="#"
              className={`px-5 py-1 ${
                activeLink === "Buy"
                  ? "text-[#0059B1] font-bold border-b-4 border-[#0059B1]"
                  : "dark:text-violet-600"
              }`}
              onClick={() => handleLinkClick("Buy")}
            >
              Buy
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className={`px-5 py-1 ${
                activeLink === "Rent"
                  ? "text-[#0059B1] font-bold border-b-4 border-[#0059B1]"
                  : "dark:text-violet-600"
              }`}
              onClick={() => handleLinkClick("Rent")}
            >
              Rent
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className={`px-5 py-1 ${
                activeLink === "PG"
                  ? "text-[#0059B1] font-bold border-b-4 border-[#0059B1]"
                  : "dark:text-violet-600"
              }`}
              onClick={() => handleLinkClick("PG")}
            >
              PG
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className={`px-5 py-1 ${
                activeLink === "Plot"
                  ? "text-[#0059B1] font-bold border-b-4 border-[#0059B1]"
                  : "dark:text-violet-600"
              }`}
              onClick={() => handleLinkClick("Plot")}
            >
              Plot
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className={`px-5 py-1 ${
                activeLink === "Commercial"
                  ? "text-[#0059B1] font-bold border-b-4 border-[#0059B1]"
                  : "dark:text-violet-600"
              }`}
              onClick={() => handleLinkClick("Commercial")}
            >
              Commercial
            </a>
          </div>

          <div className=" mt-10">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Search properties"
              />
            </label>
          </div>

          {/* Your Location  section*/}
          <div>
            <div className=" flex items-center mt-10 gap-8">
              <div>
                <div className=" flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_887_2295)">
                      <path
                        d="M9.99981 0.017334C7.77597 0.0199809 5.64399 0.904626 4.07158 2.47719C2.49916 4.04976 1.61473 6.18183 1.6123 8.40567C1.6123 12.8007 8.41731 18.6798 9.19564 19.3365L10.0015 20.0173L10.8073 19.3365C11.584 18.6798 18.3906 12.8007 18.3906 8.40567C18.3882 6.18125 17.5033 4.04868 15.9302 2.47602C14.3571 0.903354 12.2242 0.0190986 9.99981 0.017334ZM9.99981 16.7198C7.44564 14.3932 4.11064 10.6132 4.11064 8.40567C4.11064 6.84376 4.7311 5.34583 5.83554 4.2414C6.93997 3.13696 8.4379 2.5165 9.99981 2.5165C11.5617 2.5165 13.0596 3.13696 14.1641 4.2414C15.2685 5.34583 15.889 6.84376 15.889 8.40567C15.889 10.609 12.5531 14.3907 9.99981 16.7198Z"
                        fill="#EE6611"
                      />
                      <path
                        d="M10.0004 10.8321C11.3798 10.8321 12.4979 9.71398 12.4979 8.33465C12.4979 6.95532 11.3798 5.83716 10.0004 5.83716C8.6211 5.83716 7.50293 6.95532 7.50293 8.33465C7.50293 9.71398 8.6211 10.8321 10.0004 10.8321Z"
                        fill="#EE6611"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_887_2295">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <h2 className=" text-lg font-semibold ">Your Location</h2>
                </div>

                <div className=" w-[285px] h-[48px]  bg-[#ECF5FF] flex items-center justify-end rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className=" mr-4"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
                      fill="#EE6611"
                    />
                  </svg>
                </div>
              </div>
              {/* Property Type section */}
              <div>
                <div className=" flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_887_2299)">
                      <path
                        d="M18.91 6.20573L11.75 0.604066C11.2509 0.212088 10.6346 -0.000976562 10 -0.000976562C9.36538 -0.000976562 8.74912 0.212088 8.25001 0.604066L1.09001 6.20573C0.749535 6.4707 0.474268 6.81012 0.285325 7.19798C0.0963817 7.58583 -0.00121816 8.01181 1.14761e-05 8.44323V19.9999H20V8.44323C20.0012 8.01181 19.9036 7.58583 19.7147 7.19798C19.5258 6.81012 19.2505 6.4707 18.91 6.20573ZM17.5 17.4999H2.50001V8.44323C2.50021 8.39154 2.51208 8.34057 2.53474 8.2941C2.55739 8.24764 2.59024 8.20689 2.63085 8.1749L9.79001 2.5724C9.84962 2.52618 9.92291 2.5011 9.99835 2.5011C10.0738 2.5011 10.1471 2.52618 10.2067 2.5724L17.3692 8.1749C17.4098 8.20689 17.4426 8.24764 17.4653 8.2941C17.4879 8.34057 17.4998 8.39154 17.5 8.44323V17.4999ZM10 6.66657C9.17484 6.66674 8.36831 6.91191 7.68265 7.37102C6.99699 7.83012 6.46309 8.48247 6.14862 9.24537C5.83416 10.0083 5.7533 10.8474 5.9163 11.6563C6.0793 12.4652 6.4788 13.2075 7.06418 13.7891L10 16.6616L12.9458 13.7799C13.5287 13.1972 13.9256 12.4548 14.0865 11.6465C14.2473 10.8382 14.1649 10.0004 13.8496 9.239C13.5342 8.47758 13.0002 7.82677 12.315 7.36888C11.6298 6.91098 10.8241 6.66658 10 6.66657ZM10 12.4999C9.67038 12.4999 9.34814 12.4022 9.07406 12.219C8.79998 12.0359 8.58636 11.7756 8.46021 11.471C8.33407 11.1665 8.30106 10.8314 8.36537 10.5081C8.42968 10.1848 8.58841 9.88781 8.8215 9.65472C9.05459 9.42164 9.35156 9.2629 9.67486 9.19859C9.99816 9.13428 10.3333 9.16729 10.6378 9.29343C10.9424 9.41958 11.2027 9.6332 11.3858 9.90728C11.5689 10.1814 11.6667 10.5036 11.6667 10.8332C11.6667 11.2753 11.4911 11.6992 11.1785 12.0117C10.866 12.3243 10.442 12.4999 10 12.4999Z"
                        fill="#EE6611"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_887_2299">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <h2 className=" text-lg font-semibold">Property Type</h2>
                </div>

                <div className=" w-[285px] h-[48px]  bg-[#ECF5FF] flex items-center justify-end rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className=" mr-4"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
                      fill="#EE6611"
                    />
                  </svg>
                </div>
              </div>
              {/* Budget section */}
              <div>
                <div className=" flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6V6.31673C9.61957 6.60867 8.25 7.83361 8.25 9.5C8.25 11.4172 10.0628 12.75 12 12.75C13.3765 12.75 14.25 13.6557 14.25 14.5C14.25 15.3443 13.3765 16.25 12 16.25C10.6235 16.25 9.75 15.3443 9.75 14.5C9.75 14.0858 9.41421 13.75 9 13.75C8.58579 13.75 8.25 14.0858 8.25 14.5C8.25 16.1664 9.61957 17.3913 11.25 17.6833V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V17.6833C14.3804 17.3913 15.75 16.1664 15.75 14.5C15.75 12.5828 13.9372 11.25 12 11.25C10.6235 11.25 9.75 10.3443 9.75 9.5C9.75 8.65573 10.6235 7.75 12 7.75C13.3765 7.75 14.25 8.65573 14.25 9.5C14.25 9.91421 14.5858 10.25 15 10.25C15.4142 10.25 15.75 9.91421 15.75 9.5C15.75 7.83361 14.3804 6.60867 12.75 6.31673V6Z"
                      fill="#EE6611"
                    />
                  </svg>

                  <h2 className=" text-lg font-semibold">Budget</h2>
                </div>

                <div className=" w-[285px] h-[48px]  bg-[#ECF5FF] rounded"></div>
              </div>
            </div>

            {/* button section */}
            <div className=" mt-4">
              <button className="flex items-center gap-2 justify-center py-3 w-full bg-[#0059b1] text-base font-semibold hover:bg-[#2577c8] rounded mx-auto text-[#FFFFFF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-7 h-7 ml-1 opacity-70 text-[#FFFFFF]"
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
      {/* New Flat Listed section */}
      <div className=" mt-52 max-w-[1216px] mx-auto">
        <div className=" flex gap-8">
          {/* first  */}
          <div className=" w-[280px] h-[185px] bg-[#fdf0e7] p-4">
            <div>
              <h2 className=" text-[40px] font-bold text-[#d95d0f]">2K+</h2>
              <p className=" text-base font-normal text-[#1f2937]">
                New Flat Listed
              </p>
            </div>

            <div className=" flex items-center justify-between mt-6">
              <p className=" text-base font-normal text-[#E61] underline">
                View all
              </p>
              <span>
                <img src="https://i.ibb.co/wcW6VKZ/icon.png" alt="" />
              </span>
            </div>
          </div>

          {/* second */}
          <div className=" w-[280px] h-[185px] bg-[#fdf0e7] p-4">
            <div>
              <h2 className=" text-[40px] font-bold text-[#0051a1]">2K+</h2>
              <p className=" text-base font-normal text-[#1f2937]">
                New Flat Listed
              </p>
            </div>

            <div className=" flex items-center justify-between mt-6">
              <p className=" text-base font-normal text-[#0051a1] underline">
                View all
              </p>
              <span>
                <img src="https://i.ibb.co/wQBSfqT/icon-1.png" alt="" />
              </span>
            </div>
          </div>

          {/* Third */}
          <div className=" w-[280px] h-[185px] bg-[#fdf0e7] p-4">
            <div>
              <h2 className=" text-[40px] font-bold text-[#d95d0f]">2K+</h2>
              <p className=" text-base font-normal text-[#1f2937]">
                New Flat Listed
              </p>
            </div>

            <div className=" flex items-center justify-between mt-6">
              <p className=" text-base font-normal text-[#E61] underline">
                View all
              </p>
              <span>
                <img src="https://i.ibb.co/wcW6VKZ/icon.png" alt="" />
              </span>
            </div>
          </div>

          {/* four  */}
          <div className=" w-[280px] h-[185px] bg-[#fdf0e7] p-4">
            <div>
              <h2 className=" text-[40px] font-bold text-[#0051a1]">2K+</h2>
              <p className=" text-base font-normal text-[#1f2937]">
                New Flat Listed
              </p>
            </div>

            <div className=" flex items-center justify-between mt-6">
              <p className=" text-base font-normal text-[#0051a1] underline">
                View all
              </p>
              <span>
                <img src="https://i.ibb.co/wQBSfqT/icon-1.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Properties section */}
      <section className=" max-w-[1216px] mx-auto mt-10 relative">
        <div className=" flex items-center justify-between">
          <h2 className=" text-2xl font-semibold text-[#111827]">
            Popular Properties
          </h2>
          <p className=" text-lg font-semibold text-[#0059b1] underline cursor-pointer">
            <Link to={"/sell"}> See all propeety</Link>
          </p>
        </div>

        {/* card section */}
        <div className=" relative">
          <div className=" mt-6 mb-6 flex gap-8">
            <Swiper
              ref={swiperRef1} // Assign the ref to the Swiper component
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                325: {
                  slidesPerView: 1,
                },
                424: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className=" relative">
                <SwiperSlide>
                  {/* first */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/SRp1GBg/Banner-Image.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* second */}
                  <div className=" relative">
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/LJdkccq/Banner-Image-1.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* third */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/X45v473/Banner-Image-2.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* first */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/SRp1GBg/Banner-Image.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* second */}
                  <div className=" relative">
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/LJdkccq/Banner-Image-1.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* third */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/X45v473/Banner-Image-2.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="top-0 -right-8 mt-[70px] absolute z-10">
            <a onClick={goToNext1}>
              <img
                className=" w-[80px] h-[80px]"
                src="https://i.ibb.co/pnGqqtY/Group-33.png"
                alt=""
              />
            </a>
          </div>

          <div className="top-0 -left-8 right-0 mt-[70px] absolute z-10">
            <a onClick={goToPrev1}>
              <img
                className=" w-[80px] h-[80px]"
                src="https://i.ibb.co/qMNKKpD/Group-34.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
      <div className="w-[1216px] mx-auto mt-8">
        <hr className=" border-[#E3E3E3] " />
      </div>
      {/* New Listed Properties section */}
      <section className=" max-w-[1216px] mx-auto mt-10 relative">
        <div className=" flex items-center justify-between">
          <h2 className=" text-2xl font-semibold text-[#111827]">
            New Listed Properties
          </h2>
          <p className=" text-lg font-semibold text-[#0059b1] underline cursor-pointer">
            <Link to={"/sell"}> See all propeety</Link>
          </p>
        </div>

        {/* card section */}
        <div className=" relative">
          <div className=" mt-6 mb-6 flex gap-8">
            <Swiper
              ref={swiperRef2} // Assign the ref to the Swiper component
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                325: {
                  slidesPerView: 1,
                },
                424: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <div className=" relative">
                <SwiperSlide>
                  {/* first */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/SRp1GBg/Banner-Image.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* second */}
                  <div className=" relative">
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/LJdkccq/Banner-Image-1.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* third */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/X45v473/Banner-Image-2.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* first */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/SRp1GBg/Banner-Image.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* second */}
                  <div className=" relative">
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/LJdkccq/Banner-Image-1.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* third */}
                  <div>
                    <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
                      <figure>
                        <img
                          src="https://i.ibb.co/X45v473/Banner-Image-2.png"
                          alt=""
                        />
                      </figure>
                      <div className="card-body">
                        <div className=" flex items-center justify-between">
                          <div className=" bg-[#c5e2ff] p-2 w-[92px] rounded">
                            <h2 className=" text-sm font-normal text-[#00254A]">
                              Apartment !
                            </h2>
                          </div>

                          <div className=" flex items-center gap-2">
                            <img
                              src="https://i.ibb.co/5GBfs85/Rectangle-26.png"
                              alt=""
                            />
                            <h2 className=" text-base font-medium text-[#111827]">
                              Ready to Move
                            </h2>
                          </div>
                        </div>

                        <hr className=" border-[#D1D5DB]" />
                        <h2 className=" text-xl font-semibold text-[#111827]">
                          SunnySlope Suites
                        </h2>
                        <div className=" flex items-center gap-2">
                          <img
                            src="https://i.ibb.co/wBrGHSN/fi-bs-marker.png"
                            alt=""
                          />
                          <p className=" text-base font-medium text-[#6B7280]">
                            Meadowshire Park, Greenfield, USA
                          </p>
                        </div>
                        <div className=" py-4">
                          <h2 className=" text-2xl font-semibold text-[#111827]">
                            $ 250000
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" w-[55px] h-[28px] bg-[#fdf0e7] flex items-center gap-2 p-1 rounded absolute left-0 right-0 top-0 mt-[155px] ml-2">
                      <img src="https://i.ibb.co/7gR364F/Gallery.png" alt="" />
                      <span className=" text-base font-semibold">20</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="top-0 -right-8 mt-[70px] absolute z-10">
            <a onClick={goToNext2}>
              <img
                className=" w-[80px] h-[80px]"
                src="https://i.ibb.co/pnGqqtY/Group-33.png"
                alt=""
              />
            </a>
          </div>

          <div className="top-0 -left-8 right-0 mt-[70px] absolute z-10">
            <a onClick={goToPrev2}>
              <img
                className=" w-[80px] h-[80px]"
                src="https://i.ibb.co/qMNKKpD/Group-34.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
      {/* Testimonials section */}
      <section>
        <div className=" mb-5 w-[1216px] mx-auto">
          <h2 className=" text-center text-[40px] font-bold py-12">
            Testimonials
          </h2>
          <div className=" flex gap-5">
            {/* first */}
            <Swiper
              ref={swiperRef3} // Assign the ref to the Swiper component
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                325: {
                  slidesPerView: 1,
                },
                424: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              onSlideChange={(swiper) =>
                setActiveSlideIndex(swiper.activeIndex)
              }
            >
              <div>
                <SwiperSlide>
                  {/* first */}
                  <div className=" bg-[#ECF5FF] w-[592px] h-[364px] p-8">
                    <div className=" text-center">
                      <div className=" flex justify-center mb-4">
                        <img
                          className=" h-[32px]"
                          src="https://i.ibb.co/dMqJR4Z/Frame-59.png"
                          alt=""
                        />
                      </div>
                      <p className=" text-lg font-normal text-[#818181]">
                        "The level of security provided by CypherPlay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."
                      </p>

                      <div className=" mt-10">
                        <div className=" flex justify-center">
                          <img
                            className=" w-[48px] h-[48px]"
                            src="https://i.ibb.co/YjR01vQ/Ellipse-1.png"
                            alt=""
                          />
                        </div>

                        <h2 className=" text-xl font-semibold text-[#111827]">
                          Tony Stark
                        </h2>
                        <p className=" text-base font-normal text-[#6b7280]">
                          Marketing manager, XYZ
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {/* second */}
                  <div className=" bg-[#ECF5FF] w-[592px] h-[364px] p-8">
                    <div className=" text-center">
                      <div className=" flex justify-center mb-4">
                        <img
                          className=" h-[32px]"
                          src="https://i.ibb.co/dMqJR4Z/Frame-59.png"
                          alt=""
                        />
                      </div>
                      <p className=" text-lg font-normal text-[#818181]">
                        "The level of security provided by CypherPlay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."
                      </p>

                      <div className=" mt-10">
                        <div className=" flex justify-center">
                          <img
                            className=" w-[48px] h-[48px]"
                            src="https://i.ibb.co/5TnC5q7/Ellipse-1-1.png"
                            alt=""
                          />
                        </div>

                        <h2 className=" text-xl font-semibold text-[#111827]">
                          Tony Stark
                        </h2>
                        <p className=" text-base font-normal text-[#6b7280]">
                          Marketing manager, XYZ
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {/* first */}
                  <div className=" bg-[#ECF5FF] w-[592px] h-[364px] p-8">
                    <div className=" text-center">
                      <div className=" flex justify-center mb-4">
                        <img
                          className=" h-[32px]"
                          src="https://i.ibb.co/dMqJR4Z/Frame-59.png"
                          alt=""
                        />
                      </div>
                      <p className=" text-lg font-normal text-[#818181]">
                        "The level of security provided by CypherPlay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."
                      </p>

                      <div className=" mt-10">
                        <div className=" flex justify-center">
                          <img
                            className=" w-[48px] h-[48px]"
                            src="https://i.ibb.co/YjR01vQ/Ellipse-1.png"
                            alt=""
                          />
                        </div>

                        <h2 className=" text-xl font-semibold text-[#111827]">
                          Tony Stark
                        </h2>
                        <p className=" text-base font-normal text-[#6b7280]">
                          Marketing manager, XYZ
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  {/* second */}
                  <div className=" bg-[#ECF5FF] w-[592px] h-[364px] p-8">
                    <div className=" text-center">
                      <div className=" flex justify-center mb-4">
                        <img
                          className=" h-[32px]"
                          src="https://i.ibb.co/dMqJR4Z/Frame-59.png"
                          alt=""
                        />
                      </div>
                      <p className=" text-lg font-normal text-[#818181]">
                        "The level of security provided by CypherPlay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."
                      </p>

                      <div className=" mt-10">
                        <div className=" flex justify-center">
                          <img
                            className=" w-[48px] h-[48px]"
                            src="https://i.ibb.co/5TnC5q7/Ellipse-1-1.png"
                            alt=""
                          />
                        </div>

                        <h2 className=" text-xl font-semibold text-[#111827]">
                          Tony Stark
                        </h2>
                        <p className=" text-base font-normal text-[#6b7280]">
                          Marketing manager, XYZ
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10">
          {[...Array(4).keys()].map((index) => (
            <button
              key={index}
              className={`w-[12px] h-[12px] rounded-full ${
                activeSlideIndex === index
                  ? "bg-[#ee6611] w-[22px] h-[12px]"
                  : "bg-[#fdf0e7]"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Post your Property for free section */}
      <section className=" mt-12">
        <div className=" bg-[#fdf0e7] max-w-[1440px] mx-auto h-[166px] p-12">
          <div className=" flex items-center justify-between">
            <div>
              <h2 className=" text-xl font-semibold text-[#101828]">
                Post your Property for free
              </h2>
              <p className=" text-base font-normal text-[#475467] mt-2">
                List it on Your Propriety and get genuine leads
              </p>
            </div>
            <button className="w-[176px] h-[56px] bg-[#f06224] rounded-lg text-white text-lg font-semibold hover:bg-[#e76f51]">
              Post Property
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Buy;
