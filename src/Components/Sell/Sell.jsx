import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Sell = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef3 = useRef(null);

  //
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="max-w-[1216px] mx-auto mt-[70px]">
      <div className="flex gap-5">
        <div
          className={`w-[176px] p-3 flex items-center justify-center rounded mt-20 cursor-pointer ${
            activeIndex === 0 ? "bg-[#0059b1]" : "bg-[#ecf5ff]"
          }`}
          onClick={() => handleClick(0)}
        >
          <h2
            className={`text-lg font-medium ${
              activeIndex === 0 ? "text-white" : "text-[#4b5563]"
            }`}
          >
            properties (400)
          </h2>
        </div>
        <div
          className={`w-[188px] p-3 flex items-center justify-center rounded mt-20 cursor-pointer ${
            activeIndex === 1 ? "bg-[#0059b1]" : "bg-[#ecf5ff]"
          }`}
          onClick={() => handleClick(1)}
        >
          <h2
            className={`text-lg font-medium ${
              activeIndex === 1 ? "text-white" : "text-[#4b5563]"
            }`}
          >
            New Projects (400)
          </h2>
        </div>
        <div
          className={`w-[188px] p-3 flex items-center justify-center rounded mt-20 cursor-pointer ${
            activeIndex === 2 ? "bg-[#0059b1]" : "bg-[#ecf5ff]"
          }`}
          onClick={() => handleClick(2)}
        >
          <h2
            className={`text-lg font-medium ${
              activeIndex === 2 ? "text-white" : "text-[#4b5563]"
            }`}
          >
            Pre-launch offers
          </h2>
        </div>
      </div>
      <hr className=" mt-5 border-[#E3E3E3] w-[800px]" />
      {/* 400 results for rental property section */}
      <section>
        <h2 className=" text-2xl font-medium text-[#000] mt-6">
          400 results for rental property
        </h2>

        {/* first */}
        <div className=" mt-10">
          <div className=" bg-[#f9fafb] w-[800px] h-[232px] p-6 shadow-md rounded-lg">
            <div className=" flex gap-14">
              <img src="https://i.ibb.co/pfSnGRr/Rectangle-20.png" alt="" />

              <div>
                <div className=" flex gap-8">
                  <h2 className=" text-lg font-semibold">
                    3 BHK Builder Floor for Sale in Site Ram Bazar <br /> New
                    Delhi
                  </h2>
                  <p className=" text-2xl font-bold">$ 300000</p>
                </div>

                <div className=" flex items-center justify-between mt-3">
                  <div className=" flex items-center gap-2">
                    <img
                      src="https://i.ibb.co/pzxCc4z/fi-bs-marker.png"
                      alt=""
                    />
                    <p>Meadowshire Park, Greenfield, USA</p>
                  </div>

                  <div className=" border-[#090909] hover:bg-[#090909] hover:text-white border-2 rounded flex items-center justify-center w-[135px] h-[40px]">
                    <button className="text-base font-medium">
                      <Link to={"/page4"}>Bid Property</Link>
                    </button>
                  </div>
                </div>

                <div className=" flex items-center gap-2">
                  <h2 className=" text-base font-medium">Property details</h2>

                  <div>
                    <hr className=" border-2 w-[420px] mt-2" />
                  </div>
                </div>

                <div className=" flex gap-20">
                  {/* first */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/cCHjk9c/Capa-1.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>

                  {/* second */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/sRyGnC8/Frame.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>

                  {/* third */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/XXdR9V9/Group.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second */}
        <div className=" mt-10">
          <div className=" bg-[#f9fafb] w-[800px] h-[232px] p-6 shadow-md rounded-lg">
            <div className=" flex gap-14">
              <img src="https://i.ibb.co/pfSnGRr/Rectangle-20.png" alt="" />

              <div>
                <div className=" flex gap-8">
                  <h2 className=" text-lg font-semibold">
                    3 BHK Builder Floor for Sale in Site Ram Bazar <br /> New
                    Delhi
                  </h2>
                  <p className=" text-2xl font-bold">$ 300000</p>
                </div>

                <div className=" flex items-center justify-between mt-3">
                  <div className=" flex items-center gap-2">
                    <img
                      src="https://i.ibb.co/pzxCc4z/fi-bs-marker.png"
                      alt=""
                    />
                    <p>Meadowshire Park, Greenfield, USA</p>
                  </div>

                  <div className="border-[#090909] hover:bg-[#090909] hover:text-white border-2 rounded flex items-center justify-center w-[135px] h-[40px]">
                    <button className=" text-base font-medium">
                      <Link to={"/page4"}>Bid Property</Link>
                    </button>
                  </div>
                </div>

                <div className=" flex items-center gap-2">
                  <h2 className=" text-base font-medium">Property details</h2>

                  <div>
                    <hr className=" border-2 w-[420px] mt-2" />
                  </div>
                </div>

                <div className=" flex gap-20">
                  {/* first */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/cCHjk9c/Capa-1.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>

                  {/* second */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/sRyGnC8/Frame.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>

                  {/* third */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/XXdR9V9/Group.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third */}
        <div className=" mt-10">
          <div className=" bg-[#f9fafb] w-[800px] h-[232px] p-6 shadow-md rounded-lg">
            <div className=" flex gap-14">
              <img src="https://i.ibb.co/pfSnGRr/Rectangle-20.png" alt="" />

              <div>
                <div className=" flex gap-8">
                  <h2 className=" text-lg font-semibold">
                    3 BHK Builder Floor for Sale in Site Ram Bazar <br /> New
                    Delhi
                  </h2>
                  <p className=" text-2xl font-bold">$ 300000</p>
                </div>

                <div className=" flex items-center justify-between mt-3">
                  <div className=" flex items-center gap-2">
                    <img
                      src="https://i.ibb.co/pzxCc4z/fi-bs-marker.png"
                      alt=""
                    />
                    <p>Meadowshire Park, Greenfield, USA</p>
                  </div>

                  <div className="border-[#090909] hover:bg-[#090909] hover:text-white border-2 rounded flex items-center justify-center w-[135px] h-[40px]">
                    <button className=" text-base font-medium">
                      <Link to={"/page4"}>Bid Property</Link>
                    </button>
                  </div>
                </div>

                <div className=" flex items-center gap-2">
                  <h2 className=" text-base font-medium">Property details</h2>

                  <div>
                    <hr className=" border-2 w-[420px] mt-2" />
                  </div>
                </div>

                <div className=" flex gap-20">
                  {/* first */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/cCHjk9c/Capa-1.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>

                  {/* second */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/sRyGnC8/Frame.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>

                  {/* third */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/XXdR9V9/Group.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fourth */}
        <div className=" mt-10 mb-8">
          <div className=" bg-[#f9fafb] w-[800px] h-[232px] p-6 shadow-md rounded-lg">
            <div className=" flex gap-14">
              <img src="https://i.ibb.co/pfSnGRr/Rectangle-20.png" alt="" />

              <div>
                <div className=" flex gap-8">
                  <h2 className=" text-lg font-semibold">
                    3 BHK Builder Floor for Sale in Site Ram Bazar <br /> New
                    Delhi
                  </h2>
                  <p className=" text-2xl font-bold">$ 300000</p>
                </div>

                <div className=" flex items-center justify-between mt-3">
                  <div className=" flex items-center gap-2">
                    <img
                      src="https://i.ibb.co/pzxCc4z/fi-bs-marker.png"
                      alt=""
                    />
                    <p>Meadowshire Park, Greenfield, USA</p>
                  </div>

                  <div className=" border-[#090909] hover:bg-[#090909] hover:text-white border-2 rounded flex items-center justify-center w-[135px] h-[40px]">
                    <button className=" text-base font-medium">
                      <Link to={"/page4"}>Bid Property</Link>
                    </button>
                  </div>
                </div>

                <div className=" flex items-center gap-2">
                  <h2 className=" text-base font-medium">Property details</h2>

                  <div>
                    <hr className=" border-2 w-[420px] mt-2" />
                  </div>
                </div>

                <div className=" flex gap-20">
                  {/* first */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/cCHjk9c/Capa-1.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>

                  {/* second */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/sRyGnC8/Frame.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>

                  {/* third */}
                  <div className=" flex items-center gap-3 mt-4">
                    <div className=" bg-[#ee6611] w-[40px] h-[40px] flex items-center justify-center rounded">
                      <img src="https://i.ibb.co/XXdR9V9/Group.png" alt="" />
                    </div>

                    <div>
                      <h2 className=" text-base font-medium text-[#303030]">
                        Total Area
                      </h2>
                      <p className=" text-sm font-normal text-[#535353]">
                        891 sqft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className=" mb-5 w-[800px] border-[#959595]" />
      <div className=" flex gap-4">
        <div className="w-[38px] h-[40px] bg-[#0059b1] rounded flex items-center justify-center cursor-pointer hover:bg-[#004080]">
          <span className="text-white text-lg font-normal">01</span>
        </div>
        <div className="w-[38px] h-[40px] bg-[#ecf5ff] rounded flex items-center justify-center cursor-pointer hover:bg-[#c7d2e0]">
          <span className="text-[#4b5563] text-lg font-normal">02</span>
        </div>
        <div className="w-[71px] h-[40px] bg-[#ecf5ff] rounded flex items-center justify-center cursor-pointer hover:bg-[#c7d2e0]">
          <span className="text-[#4b5563] text-lg font-normal">Next</span>
        </div>
      </div>
      {/* Need a Home Loan section */}
      <section>
        <div className=" bg-[#ecf5ff] w-[1007.51px] h-[148px] mt-10 mb-5 rounded-lg p-8">
          <div className=" flex items-center gap-12">
            <div>
              <h2 className=" text-[28px] font-semibold text-[#010101]">
                Need a Home Loan?
              </h2>
              <p className=" text-base font-normal text-[#535353]">
                Select How much Home loan you can <br /> take
              </p>
            </div>
            <div>
              <img src="https://i.ibb.co/W5Xb4s9/Frame-129.png" alt="" />
            </div>
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
    </div>
  );
};

export default Sell;
